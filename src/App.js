import React, { useState } from "react"
import ProductList from "./components/ProductList"
import { Route, Switch } from "react-router-dom"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import LayoutDefault from "./components/LayoutDefault"
import { CartContext } from "./context/CartContext"

function App() {
  const [cart, setCart] = useState({})
  return (
    <div>
      <Switch>
        <CartContext.Provider value={{ cart, setCart }}>
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
        </CartContext.Provider>
      </Switch>
    </div>
  )
}

export default App
