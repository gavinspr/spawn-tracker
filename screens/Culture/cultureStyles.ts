import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  wrap: {
    ...GlobalStyles.defaultPageStyles,
    // ...GlobalStyles.miscSet.noHeader,
    padding: 80,
    // backgroundColor: GlobalStyles.colorSet.backgroundColor,
  },
  text: {
    ...GlobalStyles.fontSet.h1,
  },
  button: {
    position: "absolute",
    bottom: 36,
    right: 8,
    width: "60%",
    ...GlobalStyles.colorSet.bgShadow
  },
  button_text: {
    fontSize: 22,
  },
});

export default styles;
