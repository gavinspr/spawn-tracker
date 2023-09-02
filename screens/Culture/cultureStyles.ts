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
    ...GlobalStyles.colorSet.bgShadow,
    position: "absolute",
    bottom: 36,
    right: 8,
    // width: "10%",
    width: 50,
    height: 50,
    // borderRadius: "50%",
    borderRadius: 25,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  button_text: {
    fontSize: 22,
  },
});

export default styles;
