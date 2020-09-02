import React from "react";
import ReceiptItem from "./ReceiptItem";
import styled from "styled-components";

const ReceiptList = () => {
  return (
    <List>
      <ReceiptItem />
      <ReceiptItem />
      <ReceiptItem />
      <ReceiptItem />
      <ReceiptItem />
    </List>
  );
};

export default ReceiptList;

const List = styled.div`
  inline-size: 100%;
`;
