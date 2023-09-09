import { createStackNavigator } from "@react-navigation/stack";
import { CultureScreen, AddCultureScreen } from "../../screens";

const CultureStack = createStackNavigator<any>();

export const CultureStackNavigator = () => {
  return (
    <CultureStack.Navigator>
      <CultureStack.Screen
        name="CultureScreen"
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
