import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

const initialState: IUser[] = [
  {
    name: '',
    age: 0,
    country: '',
    email: '',
    gender: 'cat',
    imgBase64: '',
    password: '',
    tcAccept: false,
  },
];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<IUser>) {
      state.unshift(action.payload);
    },
  },
});

export default formSlice.reducer;
