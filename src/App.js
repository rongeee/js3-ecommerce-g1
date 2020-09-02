import React, { useState, useEffect } from "react"
import ProductList from "./components/ProductList"
import { Route, Switch } from "react-router-dom"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import LayoutDefault from "./components/LayoutDefault"
import { CartContext } from "./context/CartContext"

function App() {
  const [cart, setCart] = useState({})
  console.log(cart)

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("cart"))
    if (storageCart) {
      setCart(storageCart)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

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
