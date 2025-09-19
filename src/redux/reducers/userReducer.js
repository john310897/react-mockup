import { createSlice } from '@reduxjs/toolkit';
const reducerObj = {
  name: 'data',
  intialState: { name: 'john', age: 30 },
  reducers: {
    addData(state, action) {
      return { ...state, ...action?.payload };
    },
  },
};
const userReducer = createSlice(reducerObj);
export const { addData } = userReducer.action;
export default userReducer.reducer;
