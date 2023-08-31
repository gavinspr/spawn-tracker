import React from "react";
import styles from "./homeStyles";
import { Text, View } from "react-native";
import { DashTracker } from "../../components";

export const HomeScreen = () => {
  return (
    <View style={styles.wrap}>
      {/* <Text style={styles.text}>My Fungi</Text> */}
      <DashTracker />
    </View>
  );
};
