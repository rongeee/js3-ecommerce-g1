import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const CartClearCart = () => {
  const { setCart } = useContext(CartContext);
  const handleClick = () => {
    setCart({});
  };
  return <Button onClick={handleClick}>Clear cart</Button>;
};

const Button = styled.button`
  background-color: #f60d4d;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
`;

export default CartClearCart;
