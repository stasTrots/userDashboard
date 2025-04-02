import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearUsers: () => initialState,
  },
});

export const { setUsers, setLoading, setError, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;