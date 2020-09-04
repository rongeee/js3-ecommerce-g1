import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import OrderForm from "../components/OrderForm";
import styled from "styled-components";
import OrderItems from "../components/OrderItems";
import Coupons from "../components/Coupons";
import { motion } from "framer-motion";

const OrderPage = () => {
  const { cart } = useContext(CartContext);
  let [totalPrice, setTotalPrice] = useState(null);
  let [discountPrice, setDiscountPrice] = useState(null);

  const getTotalCartPrice = () => {
    const cartArr = Object.keys(cart);
    let tempPrice = 0;

    cartArr.forEach(key => {
      tempPrice += cart[key].qty * cart[key].price;
    });

    return setTotalPrice(tempPrice);
  };

  const renderItems = () => {
    return Object.keys(cart).map((item, index) => {
      return (
        <OrderItems product={cart[item]} delayIndex={index - index * 0.85} />
      );
    });
  };

  useEffect(() => {
    getTotalCartPrice();
  }, [totalPrice, cart]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Page>
      <Wrapper>
        <h1>Order summary</h1>
        {renderItems()}
        <TotalPrice>{`${totalPrice} SEK`}</TotalPrice>
        <DiscPrice>
          {discountPrice && (
            <motion.h2 initial={{}} animate={{ scale: [1.3, 1] }}>
              Total Price {discountPrice} SEK
            </motion.h2>
          )}
        </DiscPrice>
        <Coupons totalPrice={totalPrice} setDiscountPrice={setDiscountPrice} />
        <OrderForm totalPrice={totalPrice} discountPrice={discountPrice} />
      </Wrapper>
    </Page>
  );
};

export default OrderPage;

const Page = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 800px;
  h1 {
    margin: 0 0 40px;
    font-size: 40px;
  }
`;
const TotalPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: end;
`;
const DiscPrice = styled.p`
  block-size: 50px;
`;
