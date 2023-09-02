import React from "react";
import styles from "./floatingActionButtonStyles";
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

type PropTypes = PressableProps & {
  icon: JSX.Element;
  styles?: StyleProp<ViewStyle>;
};

export const FloatingActionButton = (props: PropTypes) => {
  const { ...pressableProps } = props;

  return (
    <Pressable style={[styles.button, props.styles]} {...pressableProps}>
      <View>{props.icon}</View>
    </Pressable>
  );
};
