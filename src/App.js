import React from "react";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/product-details/:id"
          render={props => {
            return <ProductDetailsPage {...props} />;
          }}
        ></Route>
        {/* <Route path="/product-details">
          <ProductDetails />
        </Route> */}
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
