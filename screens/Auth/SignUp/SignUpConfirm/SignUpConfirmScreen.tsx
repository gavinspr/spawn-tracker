import React from "react";
import styles from "./signUpConfirmStyles";
import { View, Text } from "react-native";
import { Button } from "../../../../components";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../../../@types";
import { StackNavigationProp } from "@react-navigation/stack";

type SignUpConfirmationScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "AuthScreen"
>;

export const SignUpConfirmScreen = () => {
  const { navigate } = useNavigation<SignUpConfirmationScreenNavigationProp>();

  return (
    <View style={styles.wrap}>
      <Text style={styles.h2}>Congrats! You Signed Up!</Text>
      <Text style={styles.text}>
        You should receive a confirmation email shortly
      </Text>
      <Text style={styles.text}>Please confirm and proceed to log in!</Text>
      <Button
        title="Go to Log in"
        onPress={() => navigate("LogInScreen")}
        styles={styles.button}
      />
    </View>
  );
};
