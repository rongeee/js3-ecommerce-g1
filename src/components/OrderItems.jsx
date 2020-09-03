import React from "react";

import styled from "styled-components";

const OrderItems = ({ product }) => {
  const getTotalPrice = () => {
    const price = product.price;
    const qty = product.qty;

    return price * qty;
  };

  return (
    <div>
      <Container>
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
      {/* <p>{getTotalPrice()} SEK</p> */}
    </div>
  );
};

export default OrderItems;

const Container = styled.div`
  display: flex;
  border-top: 1px solid #d7dbdd;
  margin-bottom: 5px;
  border-bottom: 1px solid #d7dbdd;
  height: 250px;
  align-items: center;
`;

const ProductImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 3em;
`;

// const PriceInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const ImageWrapper = styled.div`
  height: 200px;
  width: 250px;
`;
