import { createStackNavigator } from "@react-navigation/stack";
import {
  SignUpScreen,
  AuthScreen,
  LogInScreen,
  SignUpConfirmScreen,
} from "../../screens";
import styles from "./authNavigatorStyles";
import { AuthStackParamList } from "../../@types";
import { CustomNavigationHeader } from "../../components";

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerTitle: "Sign Up", headerStyle: styles.header }}
      />
      <AuthStack.Screen
        name="SignUpConfirmScreen"
        component={SignUpConfirmScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{
          headerTitle: "Log In",
          headerStyle: styles.header,
          headerLeft: () => <CustomNavigationHeader destination="AuthScreen" />,
        }}
      />
    </AuthStack.Navigator>
  );
};
