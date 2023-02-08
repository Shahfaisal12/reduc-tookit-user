import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import counterSlice from './slice/Counterslice';
// import counterreducer from './slice/Counterslice'; you may also write like this

const store = configureStore({
  reducer: {
    users: userSlice,
    counter: counterSlice,
  },
});

export default store;
