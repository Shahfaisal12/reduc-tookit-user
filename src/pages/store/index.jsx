import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import counterSlice from "./slice/Counterslice";
// import counterreducer from './slice/Counterslice'; you may also write like this
import postSlice from "./postSlice/PostSlice";
import postUserReducer from "./postSlice/PostUserSlice";
import cartReducer from "./shopSlice/CartSlice";
import productReducer from "./shopSlice/ProviderSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    counter: counterSlice,
    posts: postSlice,
    userpost: postUserReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
