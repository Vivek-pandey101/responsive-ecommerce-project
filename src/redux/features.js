import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  IDLE: "idle",
  PENDING: "pending",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUS.IDLE,
  cartData: [],
  detailedProduct: {},
};

export const fetchData = createAsyncThunk("home/Allproducts", async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    console.log("Failed to fetch products");
  }
  const { products } = await response.json();
  return products;
});

export const fetchProductById = createAsyncThunk(
  "home/productsById",
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      console.log("Failed to fetch products");
    }
    const products = await response.json();
    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      state.detailedProduct = payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
