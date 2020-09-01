import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-radius: 7px;
  width: 400px;
  margin-bottom: 1em;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 16px -15px rgba(0, 0, 0, 0.58);
`

const TextWrapper = styled.div``
const Header = styled.h2``
const ImageWrapper = styled.div`
  display: flex;
`

const Description = styled.p``

export default function ProductCard({
  description,
  id,
  images,
  name,
  price,
  rating,
  stock,
}) {
  console.log(images)
  return (
    <Container>
      <ImageWrapper>
        <img alt="" src={images[0].src.small}></img>
      </ImageWrapper>
      <TextWrapper>
        <Header>{name}</Header>
        <Description>{description}</Description>
      </TextWrapper>
    </Container>
  )
}
