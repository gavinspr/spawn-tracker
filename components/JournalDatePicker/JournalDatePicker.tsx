import React, { useRef } from "react";
import { format } from "date-fns";
import { View } from "react-native";
import { ExpandableCalendar, CalendarProvider } from "react-native-calendars";
import { getTheme } from "./theme";

const leftArrowIcon = require("../../assets/previous.png");
const rightArrowIcon = require("../../assets/next.png");

// todo: mark dates when actions occur causing date to have journal entries

export const JournalDatePicker = () => {
  const currentDate: Date = new Date();
  const theme = useRef(getTheme());

  const handleDateChange = (date: any) => {
    console.log(date, "dd");
  };

  return (
    <View style={{ flex: 1 }}>
      <CalendarProvider
        date={format(currentDate, "yyyy-MM-dd")}
        onDateChanged={handleDateChange}
        showTodayButton
        todayButtonStyle={{
          marginBottom: -30,
        }}
        theme={theme.current}
      >
        <ExpandableCalendar
          // markedDates={marked.current} // todo:
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
          theme={theme.current}
          closeOnDayPress={false} // ! until not slow
        />
      </CalendarProvider>
    </View>
  );
};
