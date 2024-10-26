import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  IDLE: "idle",
  PENDING: "pending",
  ERROR: "error",
});

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cartData");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cartData) => {
  localStorage.setItem("cartData", JSON.stringify(cartData));
};

const initialState = {
  data: [],
  status: STATUS.IDLE,
  cartData: loadCartFromLocalStorage(),
  detailedProduct: {},
};

export const fetchData = createAsyncThunk("home/Allproducts", async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
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
      saveCartToLocalStorage(state.cartData);
    },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartData.find(
        (cartItem) => cartItem.item.id === itemId
      );

      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartData.find(
        (cartItem) => cartItem.item.id === itemId
      );

      if (item.quantity <= 1) {
        return;
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartData = state.cartData.filter(
        (cartItem) => cartItem.item.id !== itemId
      );
      saveCartToLocalStorage(state.cartData);
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

export const { addToCart, incrementItem, decrementItem, removeFromCart } =
  productSlice.actions;

export default productSlice.reducer;
