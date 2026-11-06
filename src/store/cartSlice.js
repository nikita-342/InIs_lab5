import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  notice: ''
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const existing = state.items.find((item) => item.id === product.id)

      if (existing) {
        existing.quantity += product.quantity
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: product.quantity
        })
      }

      const word = product.quantity === 1 ? 'товар' : product.quantity < 5 ? 'товара' : 'товаров'
      state.notice = `${product.title}: +${product.quantity} ${word}`
    },
    clearNotice(state) {
      state.notice = ''
    }
  }
})

export const { addToCart, clearNotice } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectCartNotice = (state) => state.cart.notice

export default cartSlice.reducer
