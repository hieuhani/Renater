import React, { useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import SecureStore from "expo-secure-store";

import { ColorSchemeName } from "react-native";
import { authActions, SignInScreen } from "../auth";
import LinkingConfiguration from "./LinkingConfiguration";
import { getAccessToken } from "../auth/service";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../auth/selectors";
import { MainScreen } from "../main";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const bootstrapAsync = async () => {
    try {
      const userToken = await getAccessToken();
      authActions.updateAccessToken(userToken);
    } catch (e) {
      // TODO: Show toast message or display SignInScreen
    } finally {
      authActions.updateChecking(false);
    }
  };
  useEffect(() => {
    bootstrapAsync();
  }, []);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {isLoggedIn ? <MainScreen /> : <SignInScreen />}
    </NavigationContainer>
  );
}
