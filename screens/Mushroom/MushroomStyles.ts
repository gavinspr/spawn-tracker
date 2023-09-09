import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  wrap: {
    ...GlobalStyles.defaultPageStyles,
    padding: 80,
    // backgroundColor: GlobalStyles.colorSet.backgroundColor,
  },
  text:{
   ...GlobalStyles.fontSet.h1 
  }
});

export default styles;
