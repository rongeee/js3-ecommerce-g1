import React from "react"
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

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

  return (
    <div>
      <h2>ProductList</h2>
      {renderProductCard()}
    </div>
  )
}

export default ProductList
