import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log("userdetail state console", action.payload);
    },

    removeUser(state, action) {
      // state = state.filter((item) => item.id !== action.payload);
      state.splice(action.payload, 1);
    },

    clearUsers(state, action) {
      // console.log("clear all user");
      return [];
    },

    extraReducers(builder){
      builder.addCase(userSlice.actions.clearUsers, () => {
        return [];
      });
    }
  },
});

console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser, clearUsers } = userSlice.actions;
