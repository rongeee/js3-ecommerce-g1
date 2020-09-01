import React from "react";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = props => {
  const productId = props.match.params.id;

  return (
    <div>
      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductDetailsPage;
