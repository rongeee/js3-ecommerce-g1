import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReviewList from "./ReviewList";
import { AddButton } from "./AddButton";

const ProductDetails = ({ productId }) => {
  const url = `https://mock-data-api.firebaseio.com/e-commerce/products/${productId}.json`;

  const [product, setProduct] = useState({});

  const fetchProduct = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProduct(result);
      });
  };

  const renderRatingStars = () => {
    let rounded = Math.round(product.rating);
    let ratingArr = [];

    for (let i = 0; i < rounded; i++) {
      ratingArr.push(<Star key={i}>★</Star>);
    }

    return ratingArr < 1 ? (
      <span key={0} style={{ color: "black" }}>
        No Rating
      </span>
    ) : (
      ratingArr
    );
  };

  useEffect(() => {
    fetchProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Card>
        {product.images &&
          product.images.map((item, index) => (
            <Img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ backgroundImage: `url(${item.src.large})` }}
              key={index}
            />
          ))}
        <InfoWrapper>
          <Title>{product.name}</Title>

          <ProductInfo>
            <Span>Rating:</Span>
            {renderRatingStars()}
          </ProductInfo>
          <ProductInfo>
            <Span>Price:</Span> {product.price} SEK
          </ProductInfo>
          <ProductInfo>
            <p> {product.description}</p>
          </ProductInfo>
          <ProductInfo>
            <Span>Stock:</Span> {product.stock} in stock.
          </ProductInfo>
          {Object.entries(product).length > 0 && (
            <AddButton
              myProps={{
                id: product.id,
                name: product.name,
                price: product.price,
                stock: product.stock,
                images: product.images[0],
              }}
            >
              Add to Cart
            </AddButton>
          )}
        </InfoWrapper>
      </Card>

      <ReviewList productId={productId} />
    </>
  );
};

export default ProductDetails;

const Card = styled.div`
  inline-size: 100%;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 100px; */
  border-bottom: 1px solid #dadada;
`;
const Title = styled.h3`
  font-size: 2em;
`;
const Img = styled(motion.div)`
  background-color: grey;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  block-size: 400px;
  inline-size: 500px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  margin: 3em 3em 8em;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;
const ProductInfo = styled.p`
  margin: 5px;
`;
const Star = styled.span`
  color: #e1a314;
`;
