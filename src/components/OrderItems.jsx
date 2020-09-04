import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const OrderItems = ({ product, delayIndex }) => {
  return (
    <Container
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delayIndex }}
    >
      <ImageWrapper>
        <ProductImage
          src={product.images.src.small}
          alt={product.images.alt}
        ></ProductImage>
      </ImageWrapper>

      <ProductInfo>
        <h4>{product.name}</h4>
        <p>
          Amount: {product.qty} x {product.price} SEK
        </p>
      </ProductInfo>
    </Container>
  );
};

export default OrderItems;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
`;

const ImageWrapper = styled.div`
  max-height: 80px;
  max-width: 100px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s;
  @media screen and (min-width: 430px) {
    max-height: 100px;
    max-width: 150px;
  }
  @media screen and (min-width: 536px) {
    max-height: 150px;
    max-width: 200px;
  }
`;
const ProductImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  font-weight: bold;
  padding: 0 0 0 20px;
  h4 {
    font-size: 20px;
    margin: 15px 0 15px;
  }
  p {
    font-size: 16px;

    margin: 0 0 15px;
  }
  @media screen and (min-width: 450px) {
    h4 {
      font-size: 26px;
      margin: 30px 0 15px;
    }
    p {
      font-size: 18px;
      align-self: flex-end;
      margin: 0 0 30px;
    }
  }
  @media screen and (min-width: 590px) {
    h4 {
      margin: 0 30px 0 0;
      font-size: 30px;
      margin: 30px 0 0;
    }
    p {
      font-size: 20px;
      align-self: flex-end;
      margin: 0 0 30px;
    }
  }
`;

// const PriceInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
