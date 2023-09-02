import React, { useState } from "react";
import styles from "./cultureStyles";
import { View } from "react-native";
import { Button, FloatingActionButton } from "../../components";
import Fontisto from "@expo/vector-icons/Fontisto";
import GlobalStyles from "../../constants/GlobalStyles";

export const CultureScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <View style={styles.wrap}>
      {/* <Button
        title=""
        variation="blue"
        onPress={() => setIsModalOpen(true)}
        styles={styles.button}
        textStyles={styles.button_text}
        rightIcon={
          <Fontisto
            name="injection-syringe"
            size={24}
            color={`${GlobalStyles.colorSet.accentColor}`}
          />
        }
      /> */}
      <FloatingActionButton
        icon={
          <Fontisto
            name="injection-syringe"
            size={24}
            color={`${GlobalStyles.colorSet.accentColor}`}
          />
        }
      />
      {/* <InoculateCultureModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} /> */}
    </View>
  );
};
