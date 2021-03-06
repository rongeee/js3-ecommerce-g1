import React from "react";
import { useContext, useRef, useState, useEffect } from "react";
import { CartContext, TotalContext } from "../context/CartContext";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";

const OrderForm = ({ discountPrice }) => {
  const { cart, setCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState({});
  const [controlTotal, setControlTotal] = useState(undefined);
  const { total } = useContext(TotalContext);
  const [postSuccess, setPostSuccess] = useState(false);

  const userInput = useRef();

  const checkAgainstDB = () => {
    const cartArr = Object.keys(cart);
    let urls = cartArr.map(product => {
      return `https://mock-data-api.firebaseio.com/e-commerce/products/${product}.json`;
    });
    fetchAll(urls);
  };

  async function fetchAll(urls) {
    const results = await Promise.all(
      urls.map(url =>
        fetch(url)
          .then(r => r.json())
          .then(result => {
            return cart[result.id].qty * result.price;
          })
      )
    );
    let dbTotal = 0;
    results.forEach(res => {
      dbTotal += res;
    });
    setControlTotal(dbTotal);
  }

  useEffect(() => {
    if (total === controlTotal) {
      handlePostOrder();
    } else {
      console.log("stop");
    }
  }, [controlTotal]); // eslint-disable-line react-hooks/exhaustive-deps

  function handlePostOrder() {
    const url =
      "https://mock-data-api.firebaseio.com/e-commerce/orders/group-1.json";
    const data = {
      name: userInput.current.value,
      products: cart,
      price: discountPrice ? discountPrice : total,
    };
    // console.log(data);
    userInput.current.value = null;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCart({});
        setOrderId(data.name);
        setPostSuccess(true);
      });
  }

  // console.log(orderId);
  return (
    <InputWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <NameForm>
        <input type="text" ref={userInput} placeholder="Enter your name here" />

        <motion.button
          onClick={checkAgainstDB}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Order
        </motion.button>
      </NameForm>
      {postSuccess && (
        <Redirect push to={{ pathname: `/receipt/${orderId}` }} />
      )}
    </InputWrapper>
  );
};

export default OrderForm;
const InputWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: space-around; ;
`;

const NameForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  inline-size: 100%;
  background: red;
  background-color: #ececec;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  margin: 15px 0;
  @media screen and (min-width: 470px) {
    flex-wrap: nowrap;
    margin: 30px 0;
  }
  input {
    inline-size: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    color: #111;
    block-size: 70px;
    @media screen and (min-width: 470px) {
      block-size: unset;
    }
  }
  button {
    min-inline-size: 150px;
    border: none;
    padding: 20px 50px;
    background-color: #1eeaac;
    border-radius: 7px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    outline: none;

    &:hover {
      box-shadow: 0px 3px 20px rgba(30, 234, 172, 0.4);
    }
  }
`;
