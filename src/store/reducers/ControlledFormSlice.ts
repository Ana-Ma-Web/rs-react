import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface InitialState {
  data: IUser;
}

const initialState: InitialState = {
  data: {
    name: '',
    age: 0,
    country: '',
    email: '',
    gender: 'cat',
    imgBase64: '',
    password: '',
    tcAccept: false,
  },
};

export const controlledFormSlice = createSlice({
  name: 'controlledForm',
  initialState,
  reducers: {
    setControlledForm(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
    },
  },
});

export default controlledFormSlice.reducer;
