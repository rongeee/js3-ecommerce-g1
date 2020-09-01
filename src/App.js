import React from "react";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/product-details">
          <ProductDetails />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
