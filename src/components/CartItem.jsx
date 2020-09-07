import React from "react";
import styled from "styled-components";
import CartQtyBtn from "./CartQtyBtn";
import { motion } from "framer-motion";

import { CartDeleteProduct } from "./CartDeleteProduct";

export const CartItem = ({ product }) => {
  const getTotalPrice = () => {
    const price = product.price;
    const qty = product.qty;

    return price * qty;
  };

  return (
    <Container>
      <ImageWrapper>
        <ProductImage
          src={product.images.src.small}
          alt={product.images.alt}
          whileHover={{ scale: 1.2 }}
        ></ProductImage>
      </ImageWrapper>
      <ProductInfo>
        <h4>{product.name}</h4>
        <PriceInfo>
          <p>
            {product.qty} x {product.price}:-/st.
          </p>

          <CurTotalPrice>{getTotalPrice()} SEK</CurTotalPrice>
        </PriceInfo>
        <QtyContainer>
          <CartQtyBtn value={-1} product={product} action={"-"} />
          <CartQtyBtn plus value={1} product={product} action={"+"} />
        </QtyContainer>
      </ProductInfo>
      <CartDeleteProduct productId={product.id} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  inline-size: 100%;
`;

const ImageWrapper = styled.div`
  inline-size: 100px;
  min-inline-size: 100px;
  block-size: 100px;
  border-radius: 10px;
  overflow: hidden;
`;

const ProductImage = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CurTotalPrice = styled.p`
  font-weight: bold;
`;

const QtyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
  max-inline-size: 100px;
`;
