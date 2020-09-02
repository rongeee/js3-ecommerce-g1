import React, { useState, useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {
  const [isHidden, setIsHidden] = useState(false)

  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {}, [cart])

  const handleClick = () => {}
  return <div onClick={handleClick}>I am the cart</div>
}
