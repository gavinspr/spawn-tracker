import React from "react";
import styles from "./STButtonStyles";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type PropTypes = PressableProps & { 
  title: string;
  variation?:
    | "default"
    | "ghost"
    | "invert"
    | "ghost-invert"
    | "outline"
    | "blue";
  styles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

export const STButton = (props: PropTypes) => {
  const viewStyle: StyleProp<ViewStyle> = styles[props.variation ?? "default"];

  const textStyle: StyleProp<TextStyle> =
    styles[props.variation ? `${props.variation}_text` : "default_text"];

  const { ...pressableProps } = props;

  return (
    <Pressable style={[viewStyle, props.styles]} {...pressableProps}>
      <View>{props.leftIcon}</View>
      <Text style={[textStyle, props.textStyles]}>{props.title}</Text>
      <View style={styles.iconR}>{props.rightIcon}</View>
    </Pressable>
  );
};
