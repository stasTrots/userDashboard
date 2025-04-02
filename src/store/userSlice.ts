import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInfo {
  role: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  birthDate: string;
  height: number;
  weight: number;
  university: string;
  address: string;
  phone: string;
  email: string;
  image?: string;
}

interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
  allInfo: UserInfo | null
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  image: '',
  allInfo: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.username = action.payload.username
    },
    setAllInfo: (state, action: PayloadAction<UserInfo>) => {
      state.image = action.payload.image || '';
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.username = action.payload.username
      state.allInfo = {
        role: action.payload.role,
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        gender: action.payload.gender,
        age: action.payload.age,
        birthDate: action.payload.birthDate,
        height: action.payload.height,
        weight: action.payload.weight,
        university: action.payload.university,
        address: action.payload.address,
        phone: action.payload.phone,
        email: action.payload.email
      }
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser, setAllInfo } = userSlice.actions;
export default userSlice.reducer;