import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const rootApi = "https://foods-server.herokuapp.com"

export const fetchProductsByCategory = createAsyncThunk(
  "foods/fetchByIdStatus",
  async (params) => {
    const response = await axios.get(`${rootApi}/${params}`)
    return response.data
  }
)

export const fetchProductsDetailRelated = createAsyncThunk(
  "foods/fetchProductDetailByCategoryId",
  async (params) => {
    const response = await axios.get(`${rootApi}/${params}`)
    return response.data
  }
)

export const fetchshopProducts = createAsyncThunk(
  "foods/fetchAllProduct",
  async (params) => {
    const response = await axios.get(`${rootApi}/${params}`)
    return response.data
  }
)

export const fetchProductDetail = createAsyncThunk(
  "foods/fetchProductDetail",
  async (id) => {
    const response = await axios.get(`${rootApi}/foods/${id}`)
    return response.data
  }
)

export const fetchShopProductsInit = createAsyncThunk(
  "foods/fetchShopProductsInit",
  async () => {
    const response = await axios.get(`${rootApi}/foods`)
    return response.data
  }
)

export const fetchSearchProductByUrl = createAsyncThunk(
  "foods/fetchSearchProductByUrl",
  async (params) => {
    const response = await axios.get(`${rootApi}/foods?name_like=${params}`)
    return response.data
  }
)

const productSlice = createSlice({
  initialState: {
    initProducts: [],
    initProductsByCategory: [],
    shopProducts: {
      isLoading: null,
      data: [],
    },
    productDetail: {
      isLoading: null,
      data: {},
    },
    productsByCategory: {
      isLoading: null,
      data: [],
    },
    productDetailRelated: [],
    recipesProducts: [],
    initProductsBySearch: [],
    initProductBySearchUrl: [],
  },
  name: "product",
  reducers: {
    searchProducts: (state, action) => {
      state.shopProducts.data = [...state.initProducts]
      const newProducts = state.shopProducts.data.filter((product) =>
        product.name.toLowerCase().includes(action.payload)
      )
      state.initProductsBySearch = [...newProducts]
      state.shopProducts.data = newProducts
    },
    removeProductDetail: (state) => {
      state.productDetail.data = {}
    },

    filterByPriceRange: (state, action) => {
      const { low, high, type } = action.payload
      if (type === "currentId") {
        state.shopProducts.data = [...state.initProductsByCategory]
      } else if (type === "currentSearch") {
        state.shopProducts.data = [...state.initProductsBySearch]
      } else {
        state.shopProducts.data = [...state.initProducts]
      }

      state.shopProducts.data = state.shopProducts.data.filter(
        (product) =>
          product.prices.lastPrice >= low && product.prices.lastPrice <= high
      )
    },

    sortProductDesc: (state, action) => {
      state.shopProducts.data &&
        state.shopProducts.data.sort((a, b) => {
          if (action.payload === "price") {
            return b.prices.lastPrice - a.prices.lastPrice
          } else if (action.payload === "name") {
            return a[action.payload].localeCompare(b[action.payload])
          } else {
            return b[action.payload] - a[action.payload]
          }
        })
    },
    sortProductAsc: (state) => {
      state.shopProducts.data &&
        state.shopProducts.data.sort(
          (a, b) => a.prices.lastPrice - b.prices.lastPrice
        )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.shopProducts.data = action.payload
      state.productsByCategory.data = action.payload
      state.shopProducts.isLoading = false
      state.productsByCategory.isLoading = false
      state.initProductsByCategory = action.payload
    })

    builder.addCase(fetchShopProductsInit.fulfilled, (state, action) => {
      state.initProducts = action.payload
    })

    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.shopProducts.isLoading = true
      state.productsByCategory.isLoading = true
    })

    builder.addCase(fetchshopProducts.fulfilled, (state, action) => {
      state.shopProducts.data = action.payload
      state.shopProducts.isLoading = false
      state.recipesProducts = action.payload
    })
    builder.addCase(fetchshopProducts.pending, (state) => {
      state.shopProducts.isLoading = true
    })

    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.productDetail.data = action.payload
      state.productDetail.isLoading = false
    })

    builder.addCase(fetchProductDetail.pending, (state) => {
      state.productDetail.isLoading = true
    })

    builder.addCase(fetchProductsDetailRelated.fulfilled, (state, action) => {
      state.productDetailRelated = action.payload
    })

    builder.addCase(fetchSearchProductByUrl.fulfilled, (state, action) => {
      state.shopProducts.data = action.payload
      state.shopProducts.isLoading = false
      state.initProductBySearchUrl = action.payload
    })
    builder.addCase(fetchSearchProductByUrl.pending, (state) => {
      state.shopProducts.isLoading = true
    })
  },
})

export const {
  filterByPriceRange,
  sortProductAsc,
  searchProducts,
  sortProductDesc,
  removeProductDetail,
} = productSlice.actions
export default productSlice.reducer
