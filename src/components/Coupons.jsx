import React, { useEffect, useState, useRef } from "react";

import { CouponMsg } from "./CouponMsg";

const Coupons = ({ setDiscountPrice, totalPrice }) => {
  const [coupons, setCoupons] = useState({});
  let [couponMsg, setCouponMsg] = useState(null);
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

  const checkCoupons = () => {
    let couponsArr = Object.keys(coupons);

    couponsArr.find((coupon) => {
      if (coupon === couponCode.current.value) {
        if (coupons[coupon].valid) {
          setCouponMsg("Code applied successfully!");
          return giveDiscount(couponCode.current.value);
        } else {
          return setCouponMsg("This code has expired.");
        }
      } else {
        return setCouponMsg("This code does not exist.");
      }
    });
  };

  const giveDiscount = (currentCoupon) => {
    let tempPrice = Math.round(totalPrice * coupons[currentCoupon].discount);

    setDiscountPrice(tempPrice);
  };

  return (
    <div>
      {couponMsg && <CouponMsg couponMsg={couponMsg} />}
      <input type="text" ref={couponCode} />
      <button onClick={checkCoupons}>Check</button>
    </div>
  );
};

export default Coupons;
