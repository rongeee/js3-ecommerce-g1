import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

export const AddButton = ({ myProps }) => {
  const { cart, setCart } = useContext(CartContext);

  const { id, name, price, stock, images } = myProps;

  const setLocalStorage = () => {};

  const addQty = () => {
    if (checkInStock()) {
      setCart(prevState => {
        return {
          ...prevState,
          [id]: { ...prevState[id], qty: prevState[id].qty++ },
        };
      });
    }
  };

  const checkInStock = () => {
    console.log(cart[id].qty);
    if (cart[id].qty <= stock) {
      return true;
    } else {
      console.log("TOO MANY");
      return false;
    }
  };

  const handleClick = () => {
    const product = { [id]: { name, price, qty: 1, images } };

    if (cart[id]) {
      addQty();
    } else {
      setCart(prevState => {
        return {
          ...prevState,
          [id]: { ...product[id] },
        };
      });
    }
  };
  return <Btn onClick={handleClick}>Add to cart</Btn>;
};

const Btn = styled.button`
  background: #0f0f6d;
  color: #ffffff;
  font-size: 1rem;
  padding: 1em;
  border: 0;
  transition: all 0.2s;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #2b2bff;

    border-radius: 10px;
    box-shadow: 0px 3px 7px #0000ff61;
  }
`;
