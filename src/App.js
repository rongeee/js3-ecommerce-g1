import React, { useState, useEffect } from "react"
import ProductList from "./components/ProductList"
import { Route, Switch } from "react-router-dom"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import LayoutDefault from "./components/LayoutDefault"
import { CartContext, TotalContext } from "./context/CartContext"
import ReceiptPage from "./pages/ReceiptPage"
import OrderPage from "./pages/OrderPage"

function App() {
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)


  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("cart"))
    if (storageCart) {
      setCart(storageCart)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    // this useEffect makes sure that the total price is calculated with prices from the api
    const cartArr = Object.keys(cart)
    let calcTotal = 0
    cartArr.forEach(product => {
      const url = `https://mock-data-api.firebaseio.com/e-commerce/products/${product}.json`
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          if (cart[product]) {
            calcTotal += cart[product].qty * result.price
            setTotal(calcTotal)
          }
        })
    })
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <TotalContext.Provider value={{ total, setTotal }}>
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

          <Route
            path="/receipt/:id"
            render={(props) => {
              return (
                <LayoutDefault>
                  <ReceiptPage {...props} />
                </LayoutDefault>
              )
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
  )
}

export default App
