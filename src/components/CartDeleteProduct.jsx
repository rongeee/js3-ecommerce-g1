import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { deleteProduct } from "../cart.utils";

export const CartDeleteProduct = ({ productId }) => {
  const { setCart } = useContext(CartContext);
  const handleClick = () => {
    deleteProduct(setCart, productId);
  };
  return <Button onClick={handleClick}>X</Button>;
};

const Button = styled.button`
  inline-size: 30px;
  min-inline-size: 30px;
  block-size: 30px;
  min-block-size: 30px;
  background-color: #f60d4d;
  color: #fff;
  font-weight: bold;
  line-height: 0;
  border-radius: 5px;
`;
