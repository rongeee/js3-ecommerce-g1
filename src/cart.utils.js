export const addQty = (cart, setCart, id, stock, value) => {
  if (cart[id].qty < stock) {
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: { ...prevState[id], qty: prevState[id].qty + value },
      }
    })
  }
}
