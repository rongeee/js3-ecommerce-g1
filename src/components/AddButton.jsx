import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { addQty } from "../cart.utils";

export const AddButton = ({ myProps }) => {
  const { cart, setCart } = useContext(CartContext);

  const { id, name, price, stock, images } = myProps;

  const handleClick = () => {
    const product = { [id]: { name, price, qty: 1, images } };

    if (cart[id]) {
      addQty(cart, setCart, id, stock, 1);
    } else {
      setCart((prevState) => {
        return {
          ...prevState,
          [id]: { ...product[id], id, stock },
        };
      });
    }
  };
  return <Btn onClick={handleClick}>Add to cart</Btn>;
};

const Btn = styled.button`
  background-color: #2e86c1;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: #2b2bff;

    border-radius: 10px;
    box-shadow: 0px 3px 7px #0000ff61;
  }
`;
