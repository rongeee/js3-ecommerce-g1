import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import OrderForm from "../components/OrderForm";
import styled from "styled-components";
import OrderItems from "../components/OrderItems";
import Coupons from "../components/Coupons";

const OrderPage = () => {
  const { cart } = useContext(CartContext);
  let [totalPrice, setTotalPrice] = useState(null);
  let [discountPrice, setDiscountPrice] = useState(null);

  const getTotalCartPrice = () => {
    const cartArr = Object.keys(cart);
    let tempPrice = 0;

    cartArr.forEach((key) => {
      tempPrice += cart[key].qty * cart[key].price;
    });

    return setTotalPrice(tempPrice);
  };

  const renderItems = () => {
    return Object.keys(cart).map((item) => {
      return <OrderItems product={cart[item]} />;
    });
  };

  useEffect(() => {
    getTotalCartPrice();
  }, [totalPrice, cart]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <WrapperPage>
      <OrderWrapper>
        {renderItems()}
        <h1>{`${totalPrice} SEK`}</h1>
        {discountPrice && <h2>Total Price {discountPrice} SEK</h2>}
        <Coupons totalPrice={totalPrice} setDiscountPrice={setDiscountPrice} />
        <OrderForm totalPrice={totalPrice} discountPrice={discountPrice} />
      </OrderWrapper>
    </WrapperPage>
  );
};

export default OrderPage;

const OrderWrapper = styled.div`
  width: 50vw;
`;
const WrapperPage = styled.div`
  display: flex;
  justify-content: center;
`;
