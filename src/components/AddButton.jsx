import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { addQty, addToCart } from "../cart.utils";
import { motion } from "framer-motion";

export const AddButton = ({ myProps }) => {
  const { cart, setCart } = useContext(CartContext);

  const { id, name, price, stock, images } = myProps;

  const handleClick = () => {
    const product = { [id]: { name, price, qty: 1, images } };

    if (cart[id]) {
      addQty(cart, setCart, id, stock, 1);
    } else {
      addToCart(setCart, product, id, stock);
    }
  };
  return (
    <Btn onClick={handleClick} whileTap={{ scale: 0.92 }}>
      Add to cart
    </Btn>
  );
};

const Btn = styled(motion.button)`
  background-color: #2e86c1;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;
  border: none;
  font-weight: bold;
  outline: none;

  &:hover {
    background: #2b2bff;

    box-shadow: 0px 3px 7px #0000ff61;
  }
`;
