import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Order from "../components/Order";
import styled from "styled-components";
import OrderItems from "../components/OrderItems";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const renderItems = () => {
    return Object.keys(cart).map((item) => {
      return <OrderItems product={cart[item]} />;
    });
  };

  return (
    <WrapperPage>
      <OrderWrapper>
        {renderItems()}
        <Order />
      </OrderWrapper>
    </WrapperPage>
  );
};

export default CartPage;

const OrderWrapper = styled.div`
  width: 50vw;
`;
const WrapperPage = styled.div`
  display: flex;
  justify-content: center;
`;
