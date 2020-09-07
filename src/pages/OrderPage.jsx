import React, { useState, useContext, useEffect } from "react"
import { CartContext, TotalContext } from "../context/CartContext"
import OrderForm from "../components/OrderForm"
import styled from "styled-components"
import OrderItems from "../components/OrderItems"
import Coupons from "../components/Coupons"
import { motion } from "framer-motion"

const OrderPage = () => {
  const { cart } = useContext(CartContext)
  const { total } = useContext(TotalContext)

  let [discountPrice, setDiscountPrice] = useState(null)

  const renderItems = () => {
    return Object.keys(cart).map((item, index) => {
      return (
        <OrderItems product={cart[item]} delayIndex={index - index * 0.85} />
      )
    })
  }

  const renderDiscPrice = () => {
    return (
      <div>
        <p>Discounted total price:{discountPrice}</p>
        <Special>OldPrice:{total} SEK</Special>
      </div>
    )
  }

  return (
    <Page>
      <Wrapper>
        <h1>Order summary</h1>
        {renderItems()}

        <TotalPrice>
          {discountPrice ? renderDiscPrice() : `Total price: ${total} SEK`}
        </TotalPrice>

        <Coupons totalPrice={total} setDiscountPrice={setDiscountPrice} />
        <OrderForm totalPrice={total} discountPrice={discountPrice} />
      </Wrapper>
    </Page>
  )
}

export default OrderPage

const Page = styled.div`
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 800px;
  padding: 0 20px;
  h1 {
    margin: 0 0 40px;
    font-size: 40px;
  }
`
const TotalPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 100px 0 30px;
  @media screen and (min-width: 860px) {
    font-size: 40px;
  }
`

const Special = styled.p`
  color: red;
  text-decoration: line-through;
`
