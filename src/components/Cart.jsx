import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CartClearCart from "./CartClearCart";

const containerVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0, transition: { type: "tween" } },
  exit: { opacity: 0, x: "100%", transition: { type: "tween" } },
};

export default function Cart() {
  const { cart } = useContext(CartContext);
  let [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    return Object.entries(cart).length > 0
      ? setEmptyCart(false)
      : setEmptyCart(true);
  }, [cart]);

  const getTotalCartPrice = () => {
    const cartArr = Object.keys(cart);
    let totalPrice = 0;

    cartArr.forEach(key => {
      totalPrice += cart[key].qty * cart[key].price;
    });

    return totalPrice;
  };

  const renderItems = () => {
    return Object.keys(cart).map(item => {
      return <CartItem product={cart[item]} />;
    });
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Container
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        emptyCart={emptyCart}
      >
        {!emptyCart && <Wrapper> {renderItems()}</Wrapper>}
        {emptyCart && <p>Empty Cart</p>}
        {!emptyCart ? (
          <OrderContainer>
            <TotalPriceContainer>
              <p>Total Price: {getTotalCartPrice()} SEK</p>
              <CartClearCart />
            </TotalPriceContainer>
            <MyLinkButton to={`/order`}>Go to order page</MyLinkButton>{" "}
          </OrderContainer>
        ) : (
          ""
        )}
      </Container>
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  min-height: 100vh;
  border: 1px solid black;
  border-radius: 10px;
  overflow-x: none;
  overflow-y: scroll;
  position: fixed;
  background-color: white;
  padding-top: 80px;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.emptyCart ? "center" : "space-between")};
  align-items: ${props => (props.emptyCart ? "center" : "flex-start")};
  z-index: 1;

  @media (min-width: 800px) {
    width: 700px;
  }
`;
const MyLinkButton = styled(Link)`
  background-color: #2e86c1;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1em;
`;

const Wrapper = styled.div``;
