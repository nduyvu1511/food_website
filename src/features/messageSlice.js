import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    cartMessage: null,
    wishListMessage: null,
  },
  reducers: {
    addCartMessage: (state, action) => {
      state.cartMessage = action.payload
    },
    deleteCartMessage: (state) => {
      state.cartMessage = null
    },

    addWishListMessage: (state, action) => {
      state.wishListMessage = action.payload
    },
    deleteWishListMessage: (state) => {
      state.wishListMessage = null
    },
  },
})

export const {
  addCartMessage,
  addWishListMessage,
  deleteWishListMessage,
  deleteCartMessage,
} = messageSlice.actions
export default messageSlice.reducer
