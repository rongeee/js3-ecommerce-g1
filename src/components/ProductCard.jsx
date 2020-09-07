import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AddButton } from "./AddButton";

export default function ProductCard({
  description,
  id,
  images,
  name,
  price,
  rating,
  stock,
  delayIndex,
}) {
  const renderRatingStars = () => {
    let rounded = Math.round(rating);
    let ratingArr = [];

    for (let i = 0; i < rounded; i++) {
      ratingArr.push(<span key={i}>★</span>);
    }

    return ratingArr < 1 ? (
      <span key={0} style={{ color: "black" }}></span>
    ) : (
      ratingArr
    );
  };

  return (
    <Container
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ delay: delayIndex, duration: 0.5 }}
    >
      <MyLink to={`/product-details/${id}`}>
        <ImageWrapper>
          <Img
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1 }}
            alt={images[0].alt}
            src={images[0].src.small}
            className="test"
          ></Img>
        </ImageWrapper>
      </MyLink>
      <InfoWrapper>
        <RatingWrapper>{renderRatingStars()}</RatingWrapper>
        <TextWrapper>
          <MyLink to={`/product-details/${id}`}>
            <h2>{name}</h2>
          </MyLink>
          <p>{description}</p>
        </TextWrapper>
        <Price>{price} SEK</Price>
        <AddButton myProps={{ id, name, price, stock, images: images[0] }}>
          Add to Cart
        </AddButton>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled(motion.div)`
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px 5px rgba(189, 195, 199, 0.4);
`;
//box-shadow: 10px 10px 16px -15px rgba(0, 0, 0, 0.58);
// box-shadow: 2px 2px 1px 2px rgba(202, 207, 210, 0.75);
const TextWrapper = styled.div`
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  height: 280px;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Img = styled(motion.img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  block-size: 100%;
  padding: 20px;
  h2 {
    font-size: 1.2rem;
    margin: 0 0 10px;
  }
  p {
    margin: 0 0 10px;
  }
`;
const Price = styled.p`
  font-weight: bold;
  align-self: flex-end;
`;

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #e1a314;
  height: 40px;
`;
