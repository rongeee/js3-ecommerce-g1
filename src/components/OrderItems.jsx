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
  height: 200px;
  width: 250px;
  border-radius: 10px;
  overflow: hidden;
`;
const ProductImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  font-weight: bold;
  line-height: 0;
  padding: 0 0 0 20px;
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
`;

// const PriceInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
