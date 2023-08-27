import React, { useState } from "react";
import { Button, Alert, Text, View } from "react-native";
import { supabase } from "../../services";

export const AccountScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  async function signOut() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert("Error signing out");
        console.error(error);
      }
    } catch (error) {
      Alert.alert("Error signing out");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account!</Text>
      <Button title="Sign Out" disabled={loading} onPress={signOut} />
    </View>
  );
};
