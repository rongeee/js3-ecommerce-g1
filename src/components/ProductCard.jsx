import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  border-radius: 7px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 16px -15px rgba(0, 0, 0, 0.58);
`;

const TextWrapper = styled.div``;
const Header = styled.h2`
  font-size: 1.2rem;
`;
const ImageWrapper = styled.div`
  display: flex;
  max-height: 250px;
  object-fit: cover;
`;

const InfoWrapper = styled.div``;

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Description = styled.p``;

const MyLink = styled.a`
  align-self: center;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #edf906;
  min-height: 20px;
`;

const Button = styled.button`
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
      <Link to={`/product-details/${id}`}>
        <ImageWrapper>
          <Img
            alt={images[0].alt}
            src={images[0].src.small}
            className="test"
          ></Img>
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <RatingWrapper>{renderRatingStars()}</RatingWrapper>
        <TextWrapper>
          <Header>{name}</Header>
          <Description>{description}</Description>
        </TextWrapper>
        <p>{price} SEK</p>
        <MyLink href="#">
          <Button>Add to Cart</Button>
        </MyLink>
      </InfoWrapper>
    </Container>
  );
}
