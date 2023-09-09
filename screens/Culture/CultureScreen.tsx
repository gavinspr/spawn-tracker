import React from "react";
import styles from "./cultureStyles";
import { View } from "react-native";
import { FloatingActionButton } from "../../components";
import Fontisto from "@expo/vector-icons/Fontisto";
import GlobalStyles from "../../constants/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export const CultureScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View style={styles.wrap}>
      <FloatingActionButton
        onPress={() => navigate("AddCulture")}
        icon={
          <Fontisto
            name="injection-syringe"
            size={26}
            color={`${GlobalStyles.colorSet.accentColor}`}
          />
        }
      />
    </View>
  );
};
