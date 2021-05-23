import React from "react";
import { Button } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { View, Text } from "../../components/Themed";
import { authActions } from "../auth";
import { useSignOut } from "../auth/hooks";

export const MainScreen = () => {
  const insets = useSafeAreaInsets();
  const [signOut] = useSignOut();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await signOut();
    dispatch(authActions.clearAccessToken());
  };
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>MainScreen</Text>
      <Button onPress={handleSignOut} title="Sign out" />
    </View>
  );
};
