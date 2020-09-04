import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LayoutDefault from "./components/LayoutDefault";
import { CartContext } from "./context/CartContext";
import ReceiptPage from "./pages/ReceiptPage";
import OrderPage from "./pages/OrderPage";
import styled from "styled-components";

function App() {
  const [cart, setCart] = useState({});
  // console.log(cart);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("cart"));
    if (storageCart) {
      setCart(storageCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Switch>
        <Route
          path="/product-details/:id"
          render={(props) => {
            return (
              <LayoutDefault>
                <ProductDetailsPage {...props} />
              </LayoutDefault>
            );
          }}
        ></Route>

        <Route
          path="/receipt/:id"
          render={(props) => {
            return (
              <LayoutDefault>
                <ReceiptPage {...props} />
              </LayoutDefault>
            );
          }}
        ></Route>
        <Route path="/order">
          <LayoutDefault>
            <OrderPage />
          </LayoutDefault>
        </Route>

        <Route path="/">
          <LayoutDefault>
            <ProductList />
          </LayoutDefault>
        </Route>
      </Switch>
    </CartContext.Provider>
  );
}

export default App;

const Div = styled.div`
  font-family: sans-serif;
  margin: 0;
`;
