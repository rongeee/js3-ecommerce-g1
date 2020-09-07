import React, { useEffect, useState } from "react";
import ReceiptItem from "./ReceiptItem";
import styled from "styled-components";

const ReceiptList = ({ orderId }) => {
  const [order, setOrder] = useState({});
  const products = order;
  const url = `https://mock-data-api.firebaseio.com/e-commerce/orders/group-1/${orderId}.json`;
  console.log(products);
  const getReceipt = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setOrder(data);
      });
  };

  const renderReciptList = () => {
    return Object.entries(products)
      .slice(1)
      .map((key, i) => {
        // console.log(key[1]);
        return Object.entries(key[1]).map((item, y) => {
          const productInfo = item[1];
          // console.log(productInfo);
          return <ReceiptItem key={y} {...productInfo} />;
        });
      });
  };

  useEffect(() => {
    getReceipt();
  }, []);

  return (
    <List>
      <h1>Buyer: {order.name}</h1>
      <ul>{renderReciptList()}</ul>
    </List>
  );
};

export default ReceiptList;

const List = styled.div`
  inline-size: 100%;
  padding: 0 20px;
`;
