import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

export default function Cart() {
  const { cart } = useContext(CartContext);

  useEffect(() => {}, [cart]);

  const getTotalCartPrice = () => {
    const cartArr = Object.keys(cart);
    let totalPrice = 0;

    cartArr.forEach((key) => {
      totalPrice += cart[key].qty * cart[key].price;
    });

    return totalPrice + " SEK";
  };

  const renderItems = () => {
    return Object.keys(cart).map((item) => {
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
      >
        <Wrapper>
          {renderItems()}
          <div>
            <p>
              {Object.entries(cart).length > 0
                ? getTotalCartPrice()
                : "Empty Cart"}
            </p>
          </div>
        </Wrapper>
        <MyLinkButton to={`/order`}>Go to order page</MyLinkButton>
      </Container>
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  width: 400px;
  max-height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: scroll;
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

const Wrapper = styled.div``;
const Item = styled.div``;
const Img = styled.div``;
