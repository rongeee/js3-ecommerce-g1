import React, { useState, useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {
  const [isHidden, setIsHidden] = useState(false)

  const { cart } = useContext(CartContext)

  useEffect(() => {}, [cart])

  const handleClick = () => {
    setIsHidden(!isHidden)
  }
  return <div onClick={handleClick}>I am the cart</div>
}
