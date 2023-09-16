import { createStackNavigator } from "@react-navigation/stack";
import {
  SignUpScreen,
  AuthScreen,
  LogInScreen,
  SignUpConfirmScreen,
} from "../../screens";
import styles from "./authNavigatorStyles";
import { AuthStackParamList } from "../../@types";
import { NavigationHeaderLeftBackArrow } from "../../components";

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: "Sign Up", headerStyle: styles.header }}
      />
      <AuthStack.Screen
        name="SignUpConfirm"
        component={SignUpConfirmScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{
          headerTitle: "Log In",
          headerStyle: styles.header,
          headerLeft: () => (
            <NavigationHeaderLeftBackArrow destination="AuthScreen" />
          ),
        }}
      />
    </AuthStack.Navigator>
  );
};
