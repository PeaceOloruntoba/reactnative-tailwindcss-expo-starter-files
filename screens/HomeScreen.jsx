import React from "react";
import { View, Text, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl text-center text-blue-600">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
