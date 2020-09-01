import React from "react";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/product-details">
          <ProductDetails />
        </Route>
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
