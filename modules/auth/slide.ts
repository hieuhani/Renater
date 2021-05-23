import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  checking: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  checking: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    updateChecking: (state, action: PayloadAction<boolean>) => {
      state.checking = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
