import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/CartContext"

const CartClearCart = () => {
  const { setCart } = useContext(CartContext)
  const handleClick = () => {
    setCart({})
  }
  return <Button onClick={handleClick}>Clear cart</Button>
}

const Button = styled.button``

export default CartClearCart
