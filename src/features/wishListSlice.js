import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const rootApi = "https://foods-server.herokuapp.com"

export const fetchWishList = createAsyncThunk(
  "wishList/fetGetWishList",
  async (id) => {
    const response = await axios.get(`${rootApi}/users/${id}/wishLists`)
    return response.data
  }
)

export const fetchAddWishList = createAsyncThunk(
  "wishList/fetchAddWishList",
  async (params) => {
    const response = await axios.post(`${rootApi}/wishLists`, params)
    return response.data
  }
)

export const fetchDeleteWishList = createAsyncThunk(
  "wishList/fetchDeleteWishList",
  async (id) => {
    await axios.delete(`${rootApi}/wishLists/${id}`)
    return id
  }
)

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    data: [],
    isLoading: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state.data = action.payload
    })

    builder.addCase(fetchAddWishList.fulfilled, (state, action) => {
      state.data.push(action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchAddWishList.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchDeleteWishList.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchDeleteWishList.pending, (state) => {
      state.isLoading = true
    })
  },
})

export default wishListSlice.reducer
