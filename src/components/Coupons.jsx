import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Coupons = ({ setDiscountPrice, totalPrice }) => {
  const [coupons, setCoupons] = useState({});
  let [couponMsg, setCouponMsg] = useState(null);
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

  const checkCoupons = () => {
    let couponsArr = Object.keys(coupons);

    couponsArr.find(coupon => {
      if (coupon === couponCode.current.value) {
        if (coupons[coupon].valid) {
          setCouponMsg(
            <SuccsesMsg initial={{ x: 200 }} animate={{ x: 0 }}>
              Code applied succesfully
            </SuccsesMsg>
          );
          return giveDiscount(couponCode.current.value);
        } else {
          return setCouponMsg(
            <ExpiredMsg initial={{ x: 200 }} animate={{ x: 0 }}>
              This code has expired.
            </ExpiredMsg>
          );
        }
      } else {
        return setCouponMsg(
          <ErrorMsg initial={{ x: 200 }} animate={{ x: 0 }}>
            This code does not exist.
          </ErrorMsg>
        );
      }
    });
  };

  const giveDiscount = currentCoupon => {
    let tempPrice = Math.round(totalPrice * coupons[currentCoupon].discount);

    setDiscountPrice(tempPrice);
  };

  return (
    <>
      <MsgWrapper>{couponMsg && couponMsg}</MsgWrapper>
      <Coupon
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <input
          type="text"
          ref={couponCode}
          placeholder="Enter coupon code here"
        />
        <motion.button
          onClick={checkCoupons}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Check
        </motion.button>
      </Coupon>
    </>
  );
};

export default Coupons;

const Coupon = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  inline-size: 100%;
  background: red;
  background-color: #ececec;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  margin: 15px 0;
  @media screen and (min-width: 470px) {
    flex-wrap: nowrap;
    margin: 30px 0;
  }
  input {
    inline-size: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    color: #111;
    block-size: 70px;
    @media screen and (min-width: 470px) {
      block-size: unset;
    }
  }
  button {
    min-inline-size: 150px;
    border: none;
    padding: 20px 50px;
    background-color: #111;
    border-radius: 7px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    outline: none;

    &:hover {
      box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;
const MsgWrapper = styled.div`
  block-size: 20px;
`;
const SuccsesMsg = styled(motion.p)`
  font-weight: bold;
  font-size: 20px;
  color: green;
`;
const ExpiredMsg = styled(motion.p)`
  font-weight: bold;
  font-size: 20px;
  color: yellow;
`;
const ErrorMsg = styled(motion.p)`
  font-weight: bold;
  font-size: 20px;
  color: red;
`;
