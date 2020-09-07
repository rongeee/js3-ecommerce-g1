import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { addQty, deleteProduct } from "../cart.utils";
import { CartContext } from "../context/CartContext";

const CartQtyBtn = ({ action, product, value }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    if (product.qty === 1 && value === -1) {
      deleteProduct(setCart, product.id);
    } else {
      addQty(cart, setCart, product.id, product.stock, value);
    }
  };

  return <Button onClick={handleClick}>{action}</Button>;
};

const Button = styled.button`
  border-radius: 5px;
  block-size: 30px;
  inline-size: 30px;
  margin: 8px 0;
  background-color: #f2f2f2;
  font-size: 26px;
  font-weight: bold;
  color: #4b4b4b;

  ${props =>
    props.plus &&
    css`
      background-color: #1eeaac;
    `};
`;

export default CartQtyBtn;
