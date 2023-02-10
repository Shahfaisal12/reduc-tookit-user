import { createSlice } from "@reduxjs/toolkit";


///// Enm

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading', 
})

const providerSlice = createSlice({
  name: "provider",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {

      // do not this never beacus they have side effect and in our reducer it call synchronously and they have fever function and having no side effect for this we use (thunk mddleware)
      // const res = await fetch('https://fakestoreapi.com/products');
      
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },

});

console.log(providerSlice.actions);

export default providerSlice.reducer;
export const { setProducts, setStatus } = providerSlice.actions;


// WE Use thunk: thunk are function
// have tow type: 
export function fetchProducts() {
return async function fetchProductsthunk(dispatch, getState){

  dispatch(setStatus(STATUSES.LOADING));

  try{
 const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data))
  dispatch(setStatus(STATUSES.IDLE));
  }
  catch(error){
    console.log(error)
  dispatch(setStatus(STATUSES.ERROR));
  }
}
}