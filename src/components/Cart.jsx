import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext, TotalContext } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CartClearCart from "./CartClearCart";

const containerVariants = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { type: "tween", duration: 0.2 } },
  exit: { x: "100%", transition: { type: "tween", duration: 0.2 } },
};

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { total } = useContext(TotalContext);

  let [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    return Object.entries(cart).length > 0
      ? setEmptyCart(false)
      : setEmptyCart(true);
  }, [cart]);

  const renderItems = () => {
    return Object.keys(cart).map(item => {
      return <CartItem product={cart[item]} />;
    });
  };

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      emptyCart={emptyCart}
    >
      {!emptyCart && <Wrapper>{renderItems()}</Wrapper>}
      {emptyCart && <p>Empty Cart</p>}
      {!emptyCart ? (
        <OrderContainer>
          <TotalPriceContainer>
            <p>Total Price: {total} SEK</p>
            <CartClearCart />
          </TotalPriceContainer>
          <MyLinkButton to={`/order`}>Go to order page</MyLinkButton>
        </OrderContainer>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  right: 0;
  top: 0;

  inline-size: 100%;
  max-inline-size: 450px;
  block-size: 100vh;
  /* background-color: #f2f2f2; */
  background-color: #fff;

  overflow-y: scroll;
  padding-top: 80px;
  justify-content: ${props => (props.emptyCart ? "center" : "space-between")};
  align-items: ${props => (props.emptyCart ? "center" : "flex-start")};
  z-index: 1;
  box-shadow: 5px 5px 10px 5px rgba(189, 195, 199, 0.4);
`;

const Wrapper = styled.div`
  padding: 0 20px;
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
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  p {
    font-weight: bold;
  }
`;
