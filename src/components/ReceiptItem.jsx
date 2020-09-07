import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ReceiptItem = ({ name, price, images, qty }) => {
  console.log(name);
  return (
    <Item>
      <Img style={{ backgroundImage: `url(${images.src.medium})` }} />

      <Info>
        <p>{name}</p>
        <p>{price} SEK</p>
        <p>Qty:{qty}</p>
      </Info>
    </Item>
  );
};

export default ReceiptItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: #ececec; */

  margin: 30px 0;
`;
const Img = styled.div`
  inline-size: 100px;
  min-inline-size: 100px;
  block-size: 100px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
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
