import { StatusBar, StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  noCulturesWrap: {
    flex: 1,
    marginTop: "53%",
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
  noCulturesArrow: {
    width: 75,
    height: 75,
    marginLeft: 24,
    opacity: 0.7,
  },
  statusBadge: {
    paddingVertical: 3,
    borderRadius: 16,
  },
  statusBadgeText: { color: "white", fontSize: 12, textAlign: "center" },
  flatList: {
    height: "100%",
    flex: 1,
    ...GlobalStyles.defaultPageStyles,
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameWrap: {
    marginLeft: 16,
    width: "40%",
  },
  scientificNameWrap: { flexDirection: "row", gap: 4 },
  scientificNameText: { fontSize: 12, fontStyle: "italic" },
  detailsWrap: {
    gap: 2,
    width: "28%",
  },
  daysText: { fontSize: 12, textAlign: "center" },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: 4,
  },
});

export default styles;
