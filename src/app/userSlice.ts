import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string | null;
  email: string | null;
  photo: string | null;
}

const initialState: UserState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export default userSlice.reducer;
