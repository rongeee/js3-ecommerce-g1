import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReviewList from "./ReviewList";

const ProductDetails = ({ productId }) => {
  const url = `https://mock-data-api.firebaseio.com/e-commerce/products/${productId}.json`;

  const [product, setProduct] = useState({});

  const fetchProduct = () => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
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
        <h2>ProductDetails</h2>

        {product.images &&
          product.images.map((item, index) => (
            <Img
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              style={{ backgroundImage: `url(${item.src.large})` }}
              key={index}
            />
          ))}
        <Title>{product.name}</Title>
        <p>Description: {product.description}</p>
        <InfoWrapper>
          <p>Price: {product.price} SEK</p>
          <p>Stock: {product.stock} in stock.</p>
          <p>Rating: {product.rating} Stars</p>
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3``;
const Img = styled(motion.div)`
  background-color: grey;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  block-size: 200px;
  inline-size: 200px;
`;
const InfoWrapper = styled.div`
  display: flex;
`;
const Btn = styled.button``;
