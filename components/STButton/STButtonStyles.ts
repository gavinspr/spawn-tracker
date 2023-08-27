import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

// !
const button: Record<string, any> = {
  borderRadius: 20,
};

const text: Record<string, any> = {
  textAlign: "center",
  fontSize: 20,
  padding: 8,
  fontWeight: "600",
};

// todo: reorder and rename variations after doing main colors past auth
const styles: Record<string, any> = StyleSheet.create({
  default: {
    backgroundColor: GlobalStyles.colorSet.accentColor,
    borderRadius: 20,
  },
  ghost: {},
  invert: {
    backgroundColor: GlobalStyles.colorSet.backgroundColor,
    borderRadius: 20,
  },
  outline: {
    borderColor: GlobalStyles.colorSet.backgroundColor,
    borderWidth: 2,
    borderRadius: 20,
  },
  default_text: {
    ...text,
    color: GlobalStyles.colorSet.backgroundColor,
  },
  ghost_text: {
    ...text,
    color: GlobalStyles.colorSet.accentColor,
  },
  invert_text: {
    ...text,
    color: GlobalStyles.colorSet.accentColor,
  },
  outline_text: {
    ...text,
    color: GlobalStyles.colorSet.backgroundColor,
  },
});

export default styles;
