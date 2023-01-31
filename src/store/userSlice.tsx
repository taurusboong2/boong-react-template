import { createSlice } from '@reduxjs/toolkit';

export type userInitialState = {
  value: {
    name: string;
    age: number;
    email: string;
  };
};

const initialState: userInitialState = {
  value: {
    name: '',
    age: 0,
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { login } = userSlice.actions;
