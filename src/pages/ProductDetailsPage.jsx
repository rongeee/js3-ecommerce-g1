import React from "react"
import ProductDetail from "../components/ProductDetail"

const ProductDetailsPage = (props) => {
  const productId = props.match.params.id

  return (
    <div>
      <h2>ProductDetails</h2>
      <ProductDetail />
    </div>
  )
}

export default ProductDetailsPage
