import React from "react";
import styled from "styled-components";
import ReceiptList from "../components/ReceiptList";

const ReceiptPage = () => {
  return (
    <div>
      <Wrapper>
        <h1>Receipt</h1>
        <ReceiptList />
        <p>Total price</p>
        <button>Continue shopping</button>
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
