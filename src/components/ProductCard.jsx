import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  border-radius: 7px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 16px -15px rgba(0, 0, 0, 0.58);
`

const TextWrapper = styled.div`
  max-height: 90px;
  overflow: hidden;
`
const Header = styled.h2`
  font-size: 1.2rem;
`
const ImageWrapper = styled.div`
  height: 280px;
`

const InfoWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
`

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const Description = styled.p``

const MyLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #edf906;
  height: 40px;
`

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
`

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
    let rounded = Math.round(rating)
    let ratingArr = []

    for (let i = 0; i < rounded; i++) {
      ratingArr.push(<span key={i}>★</span>)
    }

    return ratingArr < 1 ? (
      <span key={0} style={{ color: "black" }}>
        No Rating
      </span>
    ) : (
      ratingArr
    )
  }

  console.log("hej")

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
        <MyLink href="#">
          <Button>Add to Cart</Button>
        </MyLink>
      </InfoWrapper>
    </Container>
  )
}
