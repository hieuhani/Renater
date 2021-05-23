import { useState } from "react";
import {
  SignInPayload,
  signIn,
  SignInResponse,
  signOut,
  setAccessToken,
} from "./service";

type SignInFn = (payload: SignInPayload) => Promise<SignInResponse>;

type UseSignIn = [SignInFn, { loading: boolean; data?: SignInResponse }];

export const useSignIn = (): UseSignIn => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SignInResponse | undefined>();

  const handleSignIn = async (
    payload: SignInPayload
  ): Promise<SignInResponse> => {
    setLoading(true);
    const response = await signIn(payload);
    await setAccessToken(response.accessToken);
    setData(response);
    setLoading(false);
    return response;
  };
  return [handleSignIn, { loading, data }];
};

type SignOutFn = () => Promise<void>;

type UseSignOut = [SignOutFn, { loading: boolean }];
export const useSignOut = (): UseSignOut => {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
  };
  return [handleSignOut, { loading }];
};
