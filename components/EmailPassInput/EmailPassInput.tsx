import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./emailPassInputStyles";
import { TextInput } from "@react-native-material/core";
import { View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

type PropTypes = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export const EmailPassInput = (props: PropTypes) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <View style={styles.wrap}>
      <View>
        <TextInput
          label="Email Address"
          variant="outlined"
          autoCapitalize="none"
          onChangeText={(text: any) => props.setEmail(text)}
          value={props.email}
          color={styles.input.color}
        />
      </View>
      <View>
        <TextInput
          label="Password"
          variant="outlined"
          trailing={(props) => (
            <Icon
              name={hidePassword ? "eye-slash" : "eye"}
              onPress={() => setHidePassword(!hidePassword)}
              {...props}
            />
          )}
          autoCapitalize="none"
          onChangeText={(text) => props.setPassword(text)}
          value={props.password}
          secureTextEntry={hidePassword}
          color={styles.input.color}
        />
      </View>
    </View>
  );
};
