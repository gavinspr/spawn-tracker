import React from "react";
import styles from "./STButtonStyles";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type PropTypes = TouchableOpacityProps & {
  title: string;
  variation?: "default" | "ghost" | "invert" | "outline";
  styles?: StyleProp<ViewStyle>;
};

export const STButton = (props: PropTypes) => {
  const viewStyle: StyleProp<ViewStyle> = styles[props.variation ?? "default"];

  const textStyle: StyleProp<TextStyle> =
    styles[props.variation ? `${props.variation}_text` : "default_text"];

  const { ...touchableOpacityProps } = props;

  return (
    <TouchableOpacity
      style={[viewStyle, props.styles]}
      {...touchableOpacityProps}
    >
      <Text style={textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
