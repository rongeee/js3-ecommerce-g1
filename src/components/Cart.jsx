import React, { useState, useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {
  const [isHidden, setIsHidden] = useState(false)

  const cart = useContext(CartContext)

  useEffect(() => {
    console.log("cart updated")
  }, [cart.cart])

  const handleClick = () => {
    setIsHidden(!isHidden)
    cart.setCart({ value: "newcart" })
  }
  return <div onClick={handleClick}>I am the cart</div>
}
