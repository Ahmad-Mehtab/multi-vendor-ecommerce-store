import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuthorize: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthorized = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isAuthorized = false;
    }
  },
});

export const {
  userAuthorize,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
