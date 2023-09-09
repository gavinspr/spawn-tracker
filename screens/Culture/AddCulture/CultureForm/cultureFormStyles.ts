import { StyleSheet } from "react-native";
import GlobalStyles from "../../../../constants/GlobalStyles";

const styles = StyleSheet.create({
  formWrap: {
    ...GlobalStyles.defaultPageStyles,
    marginTop: 8,
    gap: 16,
  },
  formInputGroup: { gap: 8 },
  formInputGroupHeader: {
    paddingBottom: 4,
    fontSize: 26,
    color: "black", // todo: change color when colors settled on
  },
  substrateToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  substrateGroupWrap: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 12,
    gap: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  substrateInput: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    alignItems: "center",
    gap: 8,
    borderRadius: 10,
  },
  advancedFieldsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  advancedFieldsWrap: {
    gap: 8,
    marginBottom: 16,
  },
  isolatedWrap:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -24, 
    margin: 0,
    padding: 0,
  }
});

export default styles;
