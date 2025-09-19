import { createSlice } from '@reduxjs/toolkit';
const userReducer = createSlice({
  name: 'data',
  initialState: {id:1,name:'john'},
  reducers: {
    addData(state, action) {
      return { ...state, ...action?.payload };
    }
  },
});
export const { addData } = userReducer.actions
export default userReducer.reducer;
