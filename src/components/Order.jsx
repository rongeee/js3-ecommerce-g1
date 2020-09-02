import React from "react";
import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";

const Order = () => {
  const { cart, setCart } = useContext(CartContext);
  const userInput = useRef();
  const discountInput = useRef();

  function handlePostOrder() {
    const url =
      "https://mock-data-api.firebaseio.com/e-commerce/orders/group-1.json";
    const data = {
      name: userInput.current.value,
      products: cart,
    };
    console.log(data);
    userInput.current.value = null;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart({});
        localStorage.clear();
      });
  }
  return (
    <InputWrapper>
      <InputDiv>
        <label>Name:</label>
        <br />
        <InputField type="text" ref={userInput} />
      </InputDiv>
      <InputDiv>
        <label>Discount code:</label>
        <br />
        <InputField type="text" ref={discountInput} />
      </InputDiv>
      <InputDiv>
        <SendOrderBtn onClick={handlePostOrder}>Send Order</SendOrderBtn>
      </InputDiv>
    </InputWrapper>
  );
};

export default Order;
const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: space-around; ;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-self: space-around;
`;
const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const SendOrderBtn = styled.button`
  width: 50%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
