import { createSlice } from '@reduxjs/toolkit';

const initialState = { login: '', password: '' };

const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    updateLogin(state, action) {
      state.login = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { updateLogin, updatePassword } = loginSlice.actions
export default loginSlice.reducer;
