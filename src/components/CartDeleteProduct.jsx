import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/CartContext"

export const CartDeleteProduct = ({ productId }) => {
  const { setCart } = useContext(CartContext)
  const handleClick = () => {
    setCart((prevState) => {
      delete prevState[productId]
      return {
        ...prevState,
      }
    })
  }
  return <Button onClick={handleClick}>Delete item</Button>
}

const Button = styled.button``
