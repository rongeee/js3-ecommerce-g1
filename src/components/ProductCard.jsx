import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 7px;
  max-width: 400px;
  margin-bottom: 1em;
  padding: 40px;
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
`;

const Description = styled.p``;

const Link = styled.a`
  align-self: center;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #edf906;
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
      ratingArr.push(<span>★</span>);
    }
    return ratingArr;
  };

  return (
    <Container>
      <ImageWrapper>
        <img alt="" src={images[0].src.small}></img>
      </ImageWrapper>
      <RatingWrapper>{renderRatingStars()}</RatingWrapper>
      <TextWrapper>
        <Header>{name}</Header>
        <Description>{description}</Description>
      </TextWrapper>
      <p>{price} SEK</p>
      <Link href="#">
        <Button>Add to Cart</Button>
      </Link>
    </Container>
  );
}
