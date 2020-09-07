import React from "react";
import styled from "styled-components";
import ReceiptList from "../components/ReceiptList";
import { Link } from "react-router-dom";

const ReceiptPage = props => {
  const orderId = props.match.params.id;
  // console.log(orderId);
  return (
    <div>
      <Wrapper>
        <h1>Receipt</h1>
        <ReceiptList orderId={orderId} />
        <Link to="">
          <Btn>Continue shopping</Btn>
        </Link>
      </Wrapper>
    </div>
  );
};

export default ReceiptPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  inline-size: 100%;
  max-inline-size: 800px;
  margin: 0 auto;
  h1 {
    font-weight: 900;
  }
`;
const Btn = styled.button`
  margin: 30px 0;
  background-color: #1eeaac;
  color: #111;
  padding: 15px 30px;
  border-radius: 7px;
  font-weight: bold;
`;
