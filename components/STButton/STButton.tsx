import React from "react";
import styles from "./STButtonStyles";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type PropTypes = PressableProps & {
  title: string;
  variation?: "default" | "ghost" | "invert" | "outline";
  styles?: StyleProp<ViewStyle>;
};

export const STButton = (props: PropTypes) => {
  const viewStyle: StyleProp<ViewStyle> = styles[props.variation ?? "default"];

  const textStyle: StyleProp<TextStyle> =
    styles[props.variation ? `${props.variation}_text` : "default_text"];

  const { ...pressableProps } = props;

  return (
    <Pressable style={[viewStyle, props.styles]} {...pressableProps}>
      <Text style={textStyle}>{props.title}</Text>
    </Pressable>
  );
};
