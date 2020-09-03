import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { motion } from "framer-motion";

const listVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const ProductList = () => {
  let [products, setProducts] = useState({});

  const PRODUCTS_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/products.json";

  const getProducts = () => {
    const url = PRODUCTS_URL;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  };

  const renderProductCard = () => {
    return Object.keys(products).map((key, index) => {
      const product = products[key];
      return (
        <ProductCard key={key} {...product} delayIndex={index - index * 0.95} />
      );
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper variants={listVariants} initial="initial" animate="animate">
      {renderProductCard()}
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
