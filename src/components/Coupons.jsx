import React, { useEffect, useState, useRef, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Coupons = ({ setDiscountPrice, totalPrice }) => {
  const [coupons, setCoupons] = useState({});
  const { cart } = useContext(CartContext);
  const url =
    "https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json";

  const couponCode = useRef();

  const fetchCoupons = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
        // console.log(result);
      });
  };

  useEffect(() => {
    fetchCoupons();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let couponsArr = [];
  const checkCoupons = () => {
    couponsArr = [];
    Object.keys(coupons).map((item) => couponsArr.push(item));

    couponsArr.find((coupon) => {
      if (coupon === couponCode.current.value) {
        return giveDiscount(couponCode.current.value);
      }
    });
  };

  const giveDiscount = (currentCoupon) => {
    let tempPrice = Math.round(totalPrice * coupons[currentCoupon].discount);
    setDiscountPrice(tempPrice);
  };

  // console.log(coupons);

  return (
    <div>
      <input type="text" ref={couponCode} />
      <button onClick={checkCoupons}>Check</button>
    </div>
  );
};

export default Coupons;
