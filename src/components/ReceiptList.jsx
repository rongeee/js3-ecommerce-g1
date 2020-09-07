import React, { useEffect, useState } from "react";
import ReceiptItem from "./ReceiptItem";
import styled from "styled-components";

const ReceiptList = ({ orderId }) => {
  const [order, setOrder] = useState({});
  const url = `https://mock-data-api.firebaseio.com/e-commerce/orders/group-1/${orderId}.json`;
  // console.log(products);
  const getReceipt = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setOrder(data);
      });
  };

  console.log(Object.values(order)[1]);
  const payloadBuyer = Object.values(order)[0];
  const payloadOrderedItemListObj = Object.values(order)[1];

  const renderReciptList = () => {
    // payloadOrderedItemListArr.map(item => {
    //   console.log("janis");
    // });
  };

  useEffect(() => {
    getReceipt();
  }, []);

  return (
    <List>
      <h1>Buyer: {payloadBuyer}</h1>
      <ul>{renderReciptList()}</ul>
    </List>
  );
};

export default ReceiptList;

const List = styled.div`
  inline-size: 100%;
`;
