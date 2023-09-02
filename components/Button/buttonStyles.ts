import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

// !
const button: Record<string, any> = {
  borderRadius: 20,
  justifyContent: "center",
};

const text: Record<string, any> = {
  textAlign: "center",
  fontSize: 20,
  padding: 8,
  fontWeight: "600",
};

// !
const styles: Record<string, any> = StyleSheet.create({
  default: {
    ...button,
    backgroundColor: GlobalStyles.colorSet.backgroundColor,
  },
  ghost: {},
  invert: {
    ...button,
    backgroundColor: GlobalStyles.colorSet.accentColor,
  },
  text:{

  },
  outline: {
    ...button,
    borderColor: GlobalStyles.colorSet.backgroundColor,
    borderWidth: 2,
  },
  blue: {
    ...button,
    backgroundColor: GlobalStyles.colorSet.blue,
  },
  default_text: {
    ...text,
    color: GlobalStyles.colorSet.accentColor,
  },
  ghost_text: {
    ...text,
    color: GlobalStyles.colorSet.backgroundColor,
  },
  invert_text: {
    ...text,
    color: GlobalStyles.colorSet.backgroundColor,
  },
  text_text: { 
    ...text,
    color: GlobalStyles.colorSet.accentColor,
  },
  outline_text: {
    ...text,
    color: GlobalStyles.colorSet.backgroundColor,
  },
  blue_text: {
    ...text,
    color: GlobalStyles.colorSet.accentColor,
  },
  iconL: {},
  iconR: {
    position: "absolute",
    right: 16,
  },
});

export default styles;
