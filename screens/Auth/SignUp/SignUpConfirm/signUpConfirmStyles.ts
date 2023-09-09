import { StyleSheet } from "react-native";
import GlobalStyles from "../../../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    ...GlobalStyles.defaultPageStyles,
    justifyContent:"center",
    backgroundColor: GlobalStyles.colorSet.accentColor,
  },
  h2: {
    ...GlobalStyles.fontSet.h2,
    margin: 32,
    textAlign: "center",
    color: GlobalStyles.colorSet.primaryColor,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    marginTop: 32,
  },
});

export default styles;
