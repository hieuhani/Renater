import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { View, Text } from "../../components/Themed";
import { SignInForm } from "./components";
import { useSignIn } from "./hooks";
import { SignInPayload } from "./service";
import { authActions } from "./slide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [signIn, { loading }] = useSignIn();

  const onSignIn = async (payload: SignInPayload) => {
    const response = await signIn(payload);
    dispatch(authActions.updateAccessToken(response.accessToken));
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text>Please sign in</Text>
      <SignInForm onSubmit={onSignIn} loading={loading} />
    </View>
  );
};
