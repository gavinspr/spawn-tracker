import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import styles from "./signUpStyles";
import { EmailPassInput, Button } from "../../../components";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../../@types";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../../services";

type SignUpScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "AuthScreen"
>;

export const SignUpScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // todo

  const { navigate } = useNavigation<SignUpScreenNavigationProp>();

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    setLoading(false);
    if (error) return Alert.alert(error.message);

    navigate("SignUpConfirmScreen");
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.header}>Welcome to Spawn Tracker!</Text>
      <EmailPassInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <Button
        title="Sign Up"
        variation={email && password ? "default" : "outline"}
        onPress={signUpWithEmail}
        disabled={loading}
        styles={styles.button}
      />
      {/* // todo
       <View style={styles.socialSignUp}>
        <Text style={styles.text}>OR</Text>
      </View> */}
    </View>
  );
};
