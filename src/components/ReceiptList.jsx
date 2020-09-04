import React, { useEffect, useState } from "react";
import ReceiptItem from "./ReceiptItem";
import styled from "styled-components";

const ReceiptList = ({ orderId }) => {
  const [receiptProducts, setReceiptProducts] = useState({});
  const products = receiptProducts;
  const url = `https://mock-data-api.firebaseio.com/e-commerce/orders/group-1/${orderId}.json`;
  // console.log(products);
  const getReceipt = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReceiptProducts(data);
      });
  };

  // const renderReciptList = () => {
  //   // let products = receiptProducts.products;

  //   // return Object.entries(products).map((product, i, str) => {
  //   //   console.log(products);
  //   return Object.entries(products).map((item, i) => {
  //     const productInfo = item[1];
  //     console.log(productInfo);
  //     return <ReceiptItem key={i} {...productInfo} />;
  //   });
  //   // });

  // };
  const renderReciptList = () => {
    // let products = receiptProducts.products;

    return Object.entries(receiptProducts)
      .slice(2)
      .map((key, i, str) => {
        const product = products.products;
        // console.log(products.products);
        return Object.entries(product).map((item, i) => {
          const productInfo = item[1];
          // console.log(productInfo);
          return <ReceiptItem key={i} {...productInfo} />;
        });
      });
    // setReceiptProducts({});
  };

  useEffect(() => {
    getReceipt();
  }, []);

  return (
    <List>
      {renderReciptList()}
      <h3>Total order price: {receiptProducts.price}</h3>
      <h4>Customer name: {receiptProducts.name}</h4>
    </List>
  );
};

export default ReceiptList;

const List = styled.div`
  inline-size: 100%;
`;
