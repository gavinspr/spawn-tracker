import React, { useState } from "react";
import styles from "./loginStyles";
import { Alert, Text, View } from "react-native";
import { supabase } from "../../../services";
import { EmailPassInput, STButton } from "../../../components";

export const LogInScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // todo

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.header}>SpawnTracker</Text>
      <EmailPassInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <STButton
        title="Sign In"
        variation="invert"
        onPress={signInWithEmail}
        disabled={loading}
        styles={styles.button}
      />
    </View>
  );
};
