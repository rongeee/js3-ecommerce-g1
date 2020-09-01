import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReviewList from "./ReviewList";

const ProductDetails = ({ productId }) => {
  const url = `https://mock-data-api.firebaseio.com/e-commerce/products/${productId}.json`;

  const [product, setProduct] = useState({});

  const fetchProduct = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setProduct(result);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Card>
        <h2>Product Detail </h2>
        {product.images &&
          product.images.map((item, index) => (
            <Img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              style={{ backgroundImage: `url(${item.src.large})` }}
              key={index}
            />
          ))}

        <Title>{product.name}</Title>

        <ProductInfo>
          <Span>Rating:</Span> {product.rating}
        </ProductInfo>
        <ProductInfo>
          <Span>Price:</Span> {product.price} SEK
        </ProductInfo>
        <p>Description: {product.description}</p>

        <InfoWrapper>
          <ProductInfo>
            <Span>Stock:</Span> {product.stock} in stock.
          </ProductInfo>
          <ProductInfo></ProductInfo>
        </InfoWrapper>
        <Btn>Add to cart</Btn>
      </Card>

      <ReviewList productId={productId} />
    </>
  );
};

export default ProductDetails;

const Card = styled.div`
  inline-size: 100%;
  max-inline-size: 800px;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #dadada;
`;
const Title = styled.h3``;
const Img = styled(motion.div)`
  background-color: grey;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  block-size: 300px;
  inline-size: 300px;
`;

const InfoWrapper = styled.div`
  display: flex;
`;
const Btn = styled.button`
  background: #0f0f6d;
  color: #ffffff;
  font-size: 1rem;
  padding: 1em;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #2b2bff;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 3px 7px #0000ff61;
  }
`;
const Span = styled.span`
  font-weight: bold;
`;
const ProductInfo = styled.p`
  margin: 5px;
`;
