import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../features/cartSlice"
import productSlice from "../features/productSlice"
import ratingSlice from "../features/ratingSlice"
import { combineReducers } from "redux"
import userSlice from "../features/userSlice"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import wishListSlice from "../features/wishListSlice"
import messageSlice from "../features/messageSlice"

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  review: ratingSlice,
  user: userSlice,
  wishList: wishListSlice,
  message: messageSlice,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "review"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

export default store
export const persistor = persistStore(store)
