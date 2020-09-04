import React from "react";
import styled from "styled-components";

const ReceiptItem = ({ name, price, images, qty }) => {
  console.log(name);
  return (
    <Item>
      <Img style={{ backgroundImage: `url(${images.src.medium})` }} />

      <Info>
        <p>Product: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity:{qty}</p>
      </Info>
    </Item>
  );
};

export default ReceiptItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ececec;

  margin: 30px 0;
`;
const Img = styled.div`
  inline-size: 150px;
  block-size: 150px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Info = styled.div`
  inline-size: 100%;
  display: flex;
  justify-content: space-around;
  align-self: center;
  p {
    font-weight: bold;
  }
`;
