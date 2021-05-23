import { SecureStore } from "../storage";

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

export const getAccessToken = (): Promise<string | null> =>
  SecureStore.getItemAsync(ACCESS_TOKEN_STORAGE_KEY);
