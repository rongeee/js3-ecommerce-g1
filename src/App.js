import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LayoutDefault from "./components/LayoutDefault";
import { CartContext } from "./context/CartContext";
import ReceiptPage from "./pages/ReceiptPage";

function App() {
  const [cart, setCart] = useState({});
  console.log(cart);

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
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Switch>
          <Route
            path="/product-details/:id"
            render={props => {
              return (
                <LayoutDefault>
                  <ProductDetailsPage {...props} />
                </LayoutDefault>
              );
            }}
          ></Route>

          <Route path="/receipt">
            <LayoutDefault>
              <ReceiptPage />
            </LayoutDefault>
          </Route>

          <Route path="/">
            <LayoutDefault>
              <ProductList />
            </LayoutDefault>
          </Route>
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
