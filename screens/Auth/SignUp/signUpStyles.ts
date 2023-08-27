import { StyleSheet } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    ...GlobalStyles.defaultPageStyles,
    backgroundColor: GlobalStyles.colorSet.accentColor,
  },
  header: {
    ...GlobalStyles.fontSet.h2,
    textAlign: "center",
    color: GlobalStyles.colorSet.secondaryColor,
    margin: 24,
  },
  input: {
    color: GlobalStyles.colorSet.backgroundColor,
  },
  button: {
    marginTop: 32,
  },
  // todo:
  // socialSignUp: {},
  // text: {
  //   textAlign: "center",
  //   margin: 32,
  //   fontWeight: "700",
  //   fontSize: 18,
  // },
});

export default styles;
