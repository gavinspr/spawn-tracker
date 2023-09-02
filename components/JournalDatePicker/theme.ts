import { Platform } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

export const themeColor = GlobalStyles.colorSet.primaryColor;
export const lightThemeColor = "#f2f7f7";

export function getTheme() {
  const disabledColor = "grey";

  return {
    /* arrows */
    arrowColor: GlobalStyles.colorSet.primaryColor,
    arrowStyle: { padding: 0 },
    /* knob */
    expandableKnobColor: themeColor,
    /* month */
    monthTextColor: themeColor,
    textMonthFontSize: 16,
    // textMonthFontFamily: 'HelveticaNeue', // !
    textMonthFontWeight: "bold" as const,
    /* day names */
    textSectionTitleColor: "black",
    // textDayHeaderFontFamily: "HelveticaNeue", // !
    textDayHeaderFontWeight: "normal" as const,
    /* dates */
    dayTextColor: "black",
    todayTextColor: themeColor,
    textDayFontSize: 18,
    // textDayFontFamily: "HelveticaNeue", // !
    textDayFontWeight: "500" as const,
    textDayStyle: { marginTop: Platform.OS === "android" ? 2 : 4 },
    /* selected date */
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: "white",
    /* disabled date */
    textDisabledColor: disabledColor,
    /* dot (marked date) */ // !
    dotColor: themeColor,
    selectedDotColor: "white",
    disabledDotColor: disabledColor,
    dotStyle: { marginTop: -2 },
    /* today button */
    // todayButtonFontFamily?: TextStyle['fontFamily'];
    // todayButtonFontWeight?: TextStyle['fontWeight'];
    // todayButtonFontSize?: number;
    todayButtonPosition: "right",
    todayButtonTextColor: themeColor,
  };
}
