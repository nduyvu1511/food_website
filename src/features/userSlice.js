import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const rootApi = "https://foods-server.herokuapp.com/users/";

export const fetchGetAllUsers = createAsyncThunk("user/fetchGetUsers", async () => {
  const response = await axios.get(rootApi);
  return response.data;
});

export const fetchAddUser = createAsyncThunk("user/fetchAddUser", async (params) => {
  const response = await axios.post(rootApi, params);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    listUsers: [],
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null  
    },
    login: (state, action) => {
      state.currentUser = null
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });

    builder.addCase(fetchAddUser.fulfilled, (state, action) => {
      state.listUsers.push(action.payload);
    });
  },
});

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
