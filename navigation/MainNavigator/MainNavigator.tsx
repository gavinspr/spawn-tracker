import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Material from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  MoreScreen,
  CultureScreen,
  HomeScreen,
  MushroomScreen,
  ExploreScreen,
  GalleryScreen,
} from "../../screens";
import { MainStackParamList } from "../../@types";
import GlobalStyles from "../../constants/GlobalStyles";
import { CultureStackNavigator } from "../CultureNavigator/CultureNavigator";

const Tab = createBottomTabNavigator<MainStackParamList>();

type TabName = "Home" | "Fungi" | "Culture" | "Explore" | "Gallery" | "More";

const tabIcons: Record<TabName, string> = {
  Home: "home",
  Fungi: "mushroom",
  Culture: "test-tube",
  Explore: "explore",
  Gallery: "photo-library",
  More: "menu",
};

export const MainNavigator = () => {
  const getTabBarIcon = (
    route: { name: TabName },
    color: string,
    size: number
  ): JSX.Element => {
    const iconName = tabIcons[route.name] || "information-outline";

    if (iconName === "explore" || iconName === "photo-library")
      return <MaterialIcons name={iconName} size={size} color={color} />;

    return <Material name={iconName as any} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route, color, size),
        tabBarActiveTintColor: `${GlobalStyles.colorSet.primaryColor}`,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fungi" component={MushroomScreen} />
      <Tab.Screen name="Culture" component={CultureStackNavigator} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};
