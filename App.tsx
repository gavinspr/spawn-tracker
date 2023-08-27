import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainNavigator } from "./navigation";
import { SessionProvider } from "./providers";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SessionProvider>
        <MainNavigator />
      </SessionProvider>
    </NavigationContainer>
  );
}
