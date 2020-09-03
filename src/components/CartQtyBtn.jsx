import React, { useContext } from "react"
import styled from "styled-components"
import { addQty, deleteProduct } from "../cart.utils"
import { CartContext } from "../context/CartContext"
import { resolveMotionValue } from "framer-motion"

const CartQtyBtn = ({ action, product, value }) => {
  const { cart, setCart } = useContext(CartContext)

  return (
    <Container>
      <Button
        onClick={
          product.qty === 1
            ? () => deleteProduct(setCart, product.id)
            : () => addQty(cart, setCart, product.id, product.stock, value)
        }
      >
        {action}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  margin: 8px 0px;
`
const Button = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
`

export default CartQtyBtn
