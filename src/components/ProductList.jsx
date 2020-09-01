<<<<<<< HEAD
import React from "react";
import { useEffect } from "react";

const ProductList = () => {
  // let [products, setProducts] = useState({});
=======
import React from "react"
import { useState, useEffect } from "react"

const ProductList = () => {
  console.log("test")
  let [products, setProducts] = useState({})
>>>>>>> abdedcc0fbc8c617cc9e796a0075acb692a90038

  const PRODUCTS_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/products.json"

  const getProducts = () => {
    const url = PRODUCTS_URL

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        console.log(data);
        // setProducts(data);
      });
  };
=======
        console.log(data)
        setProducts(data)
      })
  }
>>>>>>> abdedcc0fbc8c617cc9e796a0075acb692a90038

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h2>ProductList</h2>
    </div>
  )
}

export default ProductList
