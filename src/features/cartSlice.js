import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const rootApi = "https://foods-server.herokuapp.com";

export const fetchCartProducts = createAsyncThunk(
  "carts/fetchAllCarts",
  async (id) => {
    const response = await axios.get(`${rootApi}/users/${id}/carts`);
    return response.data;
  }
);

export const fetchAddCartProducts = createAsyncThunk(
  "foods/fetchAddProduct",
  async (params) => {
    const response = await axios.post(`${rootApi}/carts`, params);
    return response.data;
  }
);

export const fetchDeleteCartProduct = createAsyncThunk(
  "foods/fetchDeleteProduct",
  async (id) => {
    await axios.delete(`${rootApi}/carts/${id}`);
    return id;
  }
);

export const fetchEditQuantityCartProducts = createAsyncThunk(
  "foods/fetchEditQuantity",
  async (data) => {
    const response = await axios.patch(`${rootApi}/carts/${data.id}`, {
      quantity: data.quantity,
    });
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allCartItems: {
      data: [],
      isLoading: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.allCartItems.data = action.payload;
    });
    
    builder.addCase(fetchAddCartProducts.pending, (state) => {
      state.allCartItems.isLoading = true;
    });

    builder.addCase(fetchAddCartProducts.fulfilled, (state, action) => {
      state.allCartItems.data.push(action.payload);
      state.allCartItems.isLoading = false;
    });

    builder.addCase(fetchDeleteCartProduct.fulfilled, (state, action) => {
      state.allCartItems.isLoading = false;
      state.allCartItems.data = state.allCartItems.data.filter(
        (item) => item.id !== action.payload
      );
    });

    builder.addCase(fetchDeleteCartProduct.pending, (state) => {
      state.allCartItems.isLoading = true;
    });

    builder.addCase(
      fetchEditQuantityCartProducts.fulfilled,
      (state, action) => {
        state.allCartItems.isLoading = false;
        state.allCartItems.data = state.allCartItems.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
    );
    builder.addCase(fetchEditQuantityCartProducts.pending, (state) => {
      state.allCartItems.isLoading = true;
    });
  },
});

export default cartSlice.reducer;
