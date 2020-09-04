import React from "react";
import styled from "styled-components";

export const CartItem = ({ product }) => {
  // console.log(product);

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
          <PriceInfo>
            <p>
              Amount: {product.qty} x {product.price} SEK
            </p>

            <p>{getTotalPrice()} SEK</p>
          </PriceInfo>
        </ProductInfo>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  box-shadow: inset 0px -2px 7px 0px rgba(0, 0, 0, 0.18);
  margin-bottom: 5px;
  background-color: #fffaef;
`;

const ProductImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1em;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 250px;
`;
