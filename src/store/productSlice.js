import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDEL
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.LOADING;
    }).addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    }).addCase(fetchProducts.rejected, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.ERROR;
    })
  }
})
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// thunk
/*
//1.Nomaral thunk method
export function fetchProducts() {
  return (
    async function fetchProductsThunk(dispatch, getState) {
      dispatch(setStatus(STATUSES.LOADING));
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        console.log("all data fetch:",data)
        dispatch(setProducts(data));
        dispatch(setStatus(STATUSES.IDEL));
      } catch (err) {
        console.log(err);
        dispatch(setStatus(STATUSES.ERROR));
      }})}
*/
//2. @reduxjs/toolkit thunk methid

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json();
  console.log("all data fetch:", data);
  return (data);
})

