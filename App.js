import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen"; // Ensure this path is correct
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  const onLayoutRootView = useCallback(async () => {
    // Hide the splash screen after your app is ready
    await SplashScreen.hideAsync();
  }, []);

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
