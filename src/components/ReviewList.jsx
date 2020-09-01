import React, { useEffect, useState } from "react";

const ReviewList = () => {
  // Need to make dynamic url (ID)
  const url =
    "https://mock-data-api.firebaseio.com/e-commerce/reviews/18272.json";

  const [review, setReview] = useState([]);

  const fetchReview = () => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setReview(result);
      });
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div>
      <h2>ReviewList</h2>
      {review &&
        review.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>{item.author.name}</p>
              <p>{item.date}</p>
              <p>{item.rating}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ReviewList;
