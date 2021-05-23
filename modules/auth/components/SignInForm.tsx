import React from "react";
import { Formik } from "formik";
import { Button, TextInput, StyleSheet } from "react-native";
import { View } from "../../../components/Themed";

export interface SignInFormValues {
  login: string;
  password: string;
}

interface Props {
  onSubmit: (values: SignInFormValues) => void;
  loading?: boolean;
}

const styles = StyleSheet.create({
  input: {
    height: 44,
    borderWidth: 1,
  },
  spacer: {
    height: 12,
  },
});

export const SignInForm: React.FunctionComponent<Props> = ({
  onSubmit,
  loading,
}) => {
  const initialValues: SignInFormValues = { login: "", password: "" };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, submitForm, values }) => (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("login")}
            onBlur={handleBlur("login")}
            value={values.login}
          />
          <View style={styles.spacer} />
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
          />
          <Button onPress={submitForm} title="Submit" disabled={loading} />
        </View>
      )}
    </Formik>
  );
};
