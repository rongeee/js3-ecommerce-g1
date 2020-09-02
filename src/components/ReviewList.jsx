import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const ReviewList = ({ productId }) => {
  // Need to make dynamic url (ID)
  const url = `https://mock-data-api.firebaseio.com/e-commerce/reviews/${productId}.json`

  const [review, setReview] = useState([])

  const fetchReview = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setReview(result)
      })
  }

  useEffect(() => {
    fetchReview()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderRatingStars = (rating) => {
    let rounded = Math.round(rating)
    let ratingArr = []

    for (let i = 0; i < rounded; i++) {
      ratingArr.push(<Star key={i}>★</Star>)
    }

    return ratingArr < 1 ? <span key={0}>No Rating</span> : ratingArr
  }

  return (
    <Container>
      <h2>ReviewList</h2>

      {review ? (
        review.map((item, index) => {
          return (
            <Review
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index - 0.7 }}
            >
              <Top>
                <Title>{item.title}</Title>
                <p>{renderRatingStars(item.rating)}</p>
              </Top>

              <p>{item.description}</p>
              <Bot>
                <p>{item.author.name}</p>
                <p>{item.date}</p>
              </Bot>
            </Review>
          )
        })
      ) : (
        <p>No reviews</p>
      )}
    </Container>
  )
}

export default ReviewList

const Container = styled(motion.div)`
  inline-size: 100%;
  max-inline-size: 600px;
  block-size: 600px;
  margin: 0 auto;
  padding: 100px 0;
  * {
    margin: 0;
  }
`
const Review = styled(motion.div)`
  margin: 30px 0;
  background-color: #ececec;
  padding: 20px;
  border-radius: 10px;
`
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 20px;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
const Star = styled.span`
  color: #e1a314;
`
const Bot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0;
  > p {
    font-weight: bold;
  }
`
