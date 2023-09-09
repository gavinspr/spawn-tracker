import { StatusBar, StyleSheet } from "react-native";
import GlobalStyles from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  headerWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  header: {
    ...GlobalStyles.fontSet.h2,
    color: GlobalStyles.colorSet.primaryColor, // !
    marginLeft: "auto",
    marginRight: "auto",
  },
  save: {
    color: GlobalStyles.colorSet.backgroundColor, // !
    fontSize: 16,
  },
});

export default styles;
