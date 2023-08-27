import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

type PropTypes = {
  destination: string;
};

export const CustomNavigationHeader = (props: PropTypes) => {
  const { navigate } = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigate(props.destination)}
      style={{ marginLeft: 16, marginRight: 16 }}
    >
      <Icon name="arrowleft" size={24} />
    </TouchableOpacity>
  );
};
