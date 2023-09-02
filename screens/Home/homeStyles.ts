import { StatusBar, StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});

export default styles;
