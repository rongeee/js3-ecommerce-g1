import React from "react";
import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";

const Order = () => {
  const { cart, setCart } = useContext(CartContext);
  const userInput = useRef();

  function handlePostOrder() {
    const url =
      "https://mock-data-api.firebaseio.com/e-commerce/orders/group-1.json";
    const data = {
      name: userInput.current.value,
      products: cart,
    };
    console.log(data);
    userInput.current.value = null;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart(null);
        localStorage.clear();
      });
  }
  return (
    <div>
      <input type="text" ref={userInput} />
      <button onClick={handlePostOrder}>Send Order</button>
    </div>
  );
};

export default Order;
