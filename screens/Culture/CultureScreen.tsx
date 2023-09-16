import React, { useEffect, useState } from "react";
import styles from "./cultureStyles";
import { Image, Text, View } from "react-native";
import { FloatingActionButton } from "../../components";
import Fontisto from "@expo/vector-icons/Fontisto";
import GlobalStyles from "../../constants/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../services";

export const CultureScreen = () => {
  const [cultures, setCultures] = useState<Array<any> | undefined>(undefined);

  const { navigate } = useNavigation<any>();

  useEffect(() => {
    fetchCultures();
  }, []);

  const fetchCultures = async () => {
    const { data, error } = await supabase.from("culture").select("*");

    if (error) {
      return console.error("Error fetching data:", error.message);
      // todo: display error toast
    } else {
      setCultures(data);
    }

    console.log(data, "dd");
  };

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
      {cultures?.length === 0 && (
        <View style={styles.noCulturesWrap}>
          <Image
            source={require("../../assets/no_culture.png")}
            resizeMode="contain"
            style={styles.noCulturesImage}
          />
          <Text style={styles.noCulturesText}>
            Oh No! You don't have any cultures yet!
          </Text>
          <Text style={styles.noCulturesText}>Tap here to add a culture</Text>
          <Image
            source={require("../../assets/bent_arrow.png")}
            resizeMode="contain"
            style={styles.noCulturesArrow}
          />
        </View>
      )}
    </View>
  );
};
