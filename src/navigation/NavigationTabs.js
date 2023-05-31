import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import { Foundation as FoundationIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator backBehavior="order">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Accueil",
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#888",
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="home" color="purple" size={size} />
          ),
          title: "Accueil",
        }}
      />
      <Tab.Screen
        name="Jouer"
        component={GameScreen}
        options={{
          tabBarLabel: "Jouer",
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#888",
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="die-six" color="purple" size={size} />
          ),
          title: "Jouer",
        }}
      />
    </Tab.Navigator>
  );
};
export default NavigationTabs;
