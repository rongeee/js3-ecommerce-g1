import React from "react";
import styled from "styled-components";

const ReceiptItem = () => {
  return (
    <Item>
      <Img style={{ backgroundImage: `url(name)` }} />
      <Info>
        <p>Name</p>
        <p>Price</p>
        <p>Qty</p>
      </Info>
    </Item>
  );
};

export default ReceiptItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ececec;
  padding: 20px;
  margin: 30px 0;
`;
const Img = styled.div`
  inline-size: 50px;
  block-size: 50px;
  background-color: red;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Info = styled.div`
  background-color: green;
  inline-size: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
  }
`;
