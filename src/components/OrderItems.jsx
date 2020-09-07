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
          whileHover={{ scale: 1.2 }}
        ></ProductImage>
      </ImageWrapper>

      <ProductInfo>
        <h4>{product.name}</h4>
        <p>
          {product.qty} x {product.price} SEK
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
const ProductImage = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-weight: bold;
  padding: 0 0 0 20px;
  h4 {
    font-size: 16px;
    margin: 0 0 16px;
  }
  p {
    font-size: 16px;
    min-inline-size: 100px;
    align-self: flex-end;
  }
  @media screen and (min-width: 500px) {
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
      align-self: flex-end;
    }
  }
  @media screen and (min-width: 590px) {
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
      align-self: flex-end;
    }
  }
`;

// const PriceInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
