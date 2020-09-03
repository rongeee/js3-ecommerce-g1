export const addQty = (cart, setCart, id, stock, value) => {
  if (cart[id].qty < stock || value === -1) {
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: { ...prevState[id], qty: prevState[id].qty + value },
      }
    })
  }
}
export const deleteProduct = (setCart, productId) => {
  setCart((prevState) => {
    delete prevState[productId]
    return {
      ...prevState,
    }
  })
}
