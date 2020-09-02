import React from "react";
import styled from "styled-components";
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
}) {
  const renderRatingStars = () => {
    let rounded = Math.round(rating);
    let ratingArr = [];

    for (let i = 0; i < rounded; i++) {
      ratingArr.push(<span key={i}>★</span>);
    }

    return ratingArr < 1 ? (
      <span key={0} style={{ color: "black" }}>
        No Rating
      </span>
    ) : (
      ratingArr
    );
  };

  return (
    <Container>
      <ImageWrapper>
        <Img
          alt={images[0].alt}
          src={images[0].src.small}
          className="test"
        ></Img>
      </ImageWrapper>
      <InfoWrapper>
        <RatingWrapper>{renderRatingStars()}</RatingWrapper>
        <TextWrapper>
          <MyLink to={`/product-details/${id}`}>
            <Header>{name}</Header>
          </MyLink>
          <Description>{description}</Description>
        </TextWrapper>
        <p>{price} SEK</p>
        <AddButton myProps={{ id, name, price, stock, images: images[0] }}>
          Add to Cart
        </AddButton>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 7px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px 5px rgba(189, 195, 199, 0.58);
`;
//box-shadow: 10px 10px 16px -15px rgba(0, 0, 0, 0.58);
// box-shadow: 2px 2px 1px 2px rgba(202, 207, 210, 0.75);
const TextWrapper = styled.div`
  max-height: 90px;
  overflow: hidden;
`;
const Header = styled.h2`
  font-size: 1.2rem;
`;
const ImageWrapper = styled.div`
  height: 280px;
`;

const InfoWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
`;

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Description = styled.p``;

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #edf906;
  height: 40px;
`;
