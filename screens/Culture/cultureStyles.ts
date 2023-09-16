import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  noCulturesWrap: {
    flex: 1,
    marginTop: "65%",
    alignItems: "center",
    gap: 5,
  },
  noCulturesImage: {
    width: 250,
    height: 250,
    marginLeft: 24,
  },
  noCulturesText: {
    fontSize: 16,
  },
  noCulturesArrow: { width: 75, height: 75, marginLeft: 24, opacity: 0.7 },
});

export default styles;
