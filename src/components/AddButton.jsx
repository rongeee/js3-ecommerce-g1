import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/CartContext"

export const AddButton = ({ myProps }) => {
  const { cart, setCart } = useContext(CartContext)

  const { id, name, price } = myProps

  const setLocalStorage = () => {}

  const handleClick = () => {
    const product = { [id]: { name, price, qty: 1 } }
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: { ...product },
      }
    })
  }
  return <Btn onClick={handleClick}>add to cart</Btn>
}

const Btn = styled.button`
  background: #0f0f6d;
  color: #ffffff;
  font-size: 1rem;
  padding: 1em;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #2b2bff;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 3px 7px #0000ff61;
  }
`
