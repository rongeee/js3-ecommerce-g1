import React from "react"
import ProductList from "./components/ProductList"
import { Route, Switch } from "react-router-dom"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import LayoutDefault from "./components/LayoutDefault"

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/product-details/:id"
          render={(props) => {
            return (
              <LayoutDefault>
                <ProductDetailsPage {...props} />
              </LayoutDefault>
            )
          }}
        ></Route>

        <Route path="/">
          <LayoutDefault>
            <ProductList />
          </LayoutDefault>
        </Route>
      </Switch>
    </div>
  )
}

export default App
