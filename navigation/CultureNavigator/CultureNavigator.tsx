import { createStackNavigator } from "@react-navigation/stack";
import { CultureScreen, AddCultureScreen } from "../../screens";
import { CultureStackParamList } from "../../@types";

const CultureStack = createStackNavigator<CultureStackParamList>();

export const CultureStackNavigator = () => {
  return (
    <CultureStack.Navigator>
      <CultureStack.Screen
        name="CultureHome"
        component={CultureScreen}
        options={{ headerShown: false }}
      />
      <CultureStack.Screen
        name="AddCulture"
        component={AddCultureScreen}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </CultureStack.Navigator>
  );
};
