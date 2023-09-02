import React from "react";
import styles from "./homeStyles";
import { View } from "react-native";
import { JournalDatePicker } from "../../components";

// todo: notification bell above date picker

export const HomeScreen = () => {
  return (
    <View style={styles.wrap}>
      <JournalDatePicker />
    </View>
  );
};
