import React, { useEffect, useState, useRef, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { motion, AnimatePresence } from "framer-motion"

const Coupons = ({ setDiscountPrice, totalPrice }) => {
  const [coupons, setCoupons] = useState({})
  let [couponMsg, setCouponMsg] = useState(null)
  const { cart } = useContext(CartContext)
  const url = "https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json"

  const couponCode = useRef()

  const fetchCoupons = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result)
        // console.log(result);
      })
  }

  useEffect(() => {
    fetchCoupons()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const checkCoupons = () => {
    let couponsArr = Object.keys(coupons)

    couponsArr.find((coupon) => {
      console.log(coupons[coupon])

      if (coupon === couponCode.current.value) {
        if (coupons[coupon].valid) {
          setCouponMsg("Code applied successfully!")
          return giveDiscount(couponCode.current.value)
        } else {
          setCouponMsg("This code has expired.")
        }
      } else {
        setCouponMsg("This code does not exist.")
      }
    })
  }

  const giveDiscount = (currentCoupon) => {
    let tempPrice = Math.round(totalPrice * coupons[currentCoupon].discount)

    setDiscountPrice(tempPrice)
  }

  return (
    <div>
      {couponMsg && (
        <motion.p
          animate={{ x: 100, opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ x: 100, opacity: 1 }}
        >
          {couponMsg}
        </motion.p>
      )}
      <input type="text" ref={couponCode} />
      <button onClick={checkCoupons}>Check</button>
    </div>
  )
}

export default Coupons
