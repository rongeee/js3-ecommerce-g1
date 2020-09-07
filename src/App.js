import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LayoutDefault from "./components/LayoutDefault";
import { CartContext, TotalContext } from "./context/CartContext";
import ReceiptPage from "./pages/ReceiptPage";
import OrderPage from "./pages/OrderPage";

function App() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("cart"));
    if (storageCart) {
      setCart(storageCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    let tempTotal = 0;
    Object.keys(cart).map(product => {
      tempTotal += cart[product].price * cart[product].qty;
      return null;
    });
    setTotal(tempTotal);
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <TotalContext.Provider value={{ total, setTotal }}>
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

          <Route
            path="/receipt/:id"
            render={props => {
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
      </TotalContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
