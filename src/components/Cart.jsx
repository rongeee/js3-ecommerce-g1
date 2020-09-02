import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const [isHidden, setIsHidden] = useState(false);

  const { cart } = useContext(CartContext);

  useEffect(() => {}, [cart]);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  const renderItems = () => {
    return Object.keys(cart).map(item => {
      return <div key={item}>{item}</div>;
    });
  };
  return (
    <Container onClick={handleClick}>
      <Wrapper>{renderItems()}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 400px;
  width: 400px;
  border: 1px solid black;
`;
const Wrapper = styled.div``;
