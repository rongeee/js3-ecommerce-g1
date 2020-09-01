import React from "react";
import { useState, useEffect } from "react";

const ProductList = () => {
  let [products, setProducts] = useState({});

  Object.keys(products).map((key) => {
    console.log(products[key])
  })

  const PRODUCTS_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/products.json";

  const getProducts = () => {
    const url = PRODUCTS_URL;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>ProductList</h2>
    </div>
  );
};

export default ProductList;
