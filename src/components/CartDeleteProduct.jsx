import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/CartContext"
import { deleteProduct } from "../cart.utils"

export const CartDeleteProduct = ({ productId }) => {
  const { setCart } = useContext(CartContext)
  const handleClick = () => {
    deleteProduct(setCart, productId)
  }
  return <Button onClick={handleClick}>Delete item</Button>
}

const Button = styled.button``
