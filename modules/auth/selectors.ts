import { RootState } from "../redux";

export const selectIsLoggedIn = (state: RootState) => !!state.auth.accessToken;
