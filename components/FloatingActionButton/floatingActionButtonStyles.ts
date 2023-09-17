import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colorSet.primaryColor,
    ...GlobalStyles.colorSet.bgShadow,
    position: "absolute",
    bottom: 24,
    right: 16,
    width: 64,
    height: 64,
    borderRadius: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
});

export default styles;
