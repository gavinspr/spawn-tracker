import { StatusBar, StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: GlobalStyles.colorSet.primaryColor,
  },
  spinnerWrap: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  filterHeader: {
    backgroundColor: GlobalStyles.colorSet.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  filterWrap: {
    marginTop: StatusBar.currentHeight,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  filterButton: {
    flexDirection: "row",
    gap: 6,
  },
  filterText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 2,
  },
  noCulturesWrap: {
    flex: 1,
    marginTop: "78%",
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
  bodyWrap: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
  },
  filterViewBody: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  flatList: {
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
