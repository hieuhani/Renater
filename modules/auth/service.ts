import { SecureStore } from "../storage";

export interface SignInPayload {
  login: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

export const getAccessToken = (): Promise<string | null> =>
  SecureStore.getItemAsync(ACCESS_TOKEN_STORAGE_KEY);

export const setAccessToken = (accessToken: string): Promise<void> => {
  return SecureStore.setItemAsync(ACCESS_TOKEN_STORAGE_KEY, accessToken);
};

export const signIn = async (
  payload: SignInPayload
): Promise<SignInResponse> => {
  return {
    accessToken: "phake token",
  };
};

export const signOut = async (): Promise<void> =>
  SecureStore.deleteItemAsync(ACCESS_TOKEN_STORAGE_KEY);
