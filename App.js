import React from 'react';
import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens';
import DiceGame from './src/components';
import { NavigationTabs } from "./src/navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Navigationtabs"
          component={NavigationTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DiceGame" component={DiceGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}