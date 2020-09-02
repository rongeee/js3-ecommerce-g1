import React, { useEffect, useState, useRef } from "react";

const Coupons = ({}) => {
  const [coupons, setCoupons] = useState({});
  const url =
    "https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json";

  const couponCode = useRef();

  const fetchCoupons = () => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
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
    Object.keys(coupons).map(item => couponsArr.push(item));

    couponsArr.find(coupon => {
      if (coupon === couponCode.current.value) {
        return giveDiscount(couponCode.current.value);
      }
    });
  };

  const giveDiscount = currentCoupon => {
    let totalPrice = 1000;

    totalPrice = totalPrice * coupons[currentCoupon].discount;

    console.log(totalPrice);
    return totalPrice;
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
