import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import BotNav from './screens/Home'
import { HomeStackScreen } from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About"component={AboutScreen} />
        <Stack.Screen name="HTS"component={HomeStackScreen} />
        <Stack.Screen name="BotNav"component={App} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}