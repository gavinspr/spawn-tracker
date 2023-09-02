import React from "react";
import styles from "./authStyles";
import { Text, View } from "react-native";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../@types";

type AuthScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "AuthScreen"
>;

export const AuthScreen = () => {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();

  return (
    <View style={styles.wrap}>
      <Text style={styles.header}>SpawnTracker</Text>
      <View style={styles.container}>
        <Button
          title="Sign Up"
          onPress={() => navigate("SignUpScreen")}
          variation="invert"
        />
        <Button
          title="Log In"
          onPress={() => navigate("LogInScreen")}
        />
      </View>
    </View>
  );
};
