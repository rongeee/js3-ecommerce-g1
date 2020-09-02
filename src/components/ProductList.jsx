import React from "react"
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import styled from "styled-components"

const ProductList = () => {
  let [products, setProducts] = useState({})

  const PRODUCTS_URL =
    "https://mock-data-api.firebaseio.com/e-commerce/products.json"

  const getProducts = () => {
    const url = PRODUCTS_URL

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }

  const renderProductCard = () => {
    return Object.keys(products).map((key) => {
      const product = products[key]
      return <ProductCard key={key} {...product} />
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <Wrapper>{renderProductCard()}</Wrapper>
}

export default ProductList

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  max-width: 1200px;
  margin: 0 auto;
`
