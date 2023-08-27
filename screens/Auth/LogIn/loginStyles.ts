import { StyleSheet } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    ...GlobalStyles.defaultPageStyles,
    backgroundColor: GlobalStyles.colorSet.accentColor,
  },
  header: {
    ...GlobalStyles.fontSet.h1,
    color: GlobalStyles.colorSet.secondaryColor,
    textAlign: "center",
    margin: 24,
  },
  input: {
    color: GlobalStyles.colorSet.backgroundColor,
  },
  button: {
    marginTop: 32,
  },
});

export default styles;
