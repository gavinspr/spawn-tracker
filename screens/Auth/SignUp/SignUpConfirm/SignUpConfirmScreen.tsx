import React from "react";
import styles from "./signUpConfirmStyles";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { STButton } from "../../../../components";
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
      <STButton
        title="Go to Log in"
        onPress={() => navigate("LogInScreen")}
        variation="outline"
        styles={styles.button}
      />
    </View>
  );
};
