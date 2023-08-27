import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    ...GlobalStyles.defaultPageStyles,
    backgroundColor: GlobalStyles.colorSet.backgroundColor,
  },
  header: {
    ...GlobalStyles.fontSet.h1,
    marginTop: "50%",
    textAlign: "center",
    color: GlobalStyles.colorSet.accentColor,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 32,
    gap: 24,
  },
});

export default styles;
