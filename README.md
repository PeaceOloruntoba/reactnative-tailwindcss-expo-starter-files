# React Native TailwindCSS Expo Starter

Welcome to the **React Native TailwindCSS Expo Starter**! This project is a boilerplate template that integrates Tailwind CSS using NativeWind into a React Native project set up with Expo. This setup provides a streamlined way to use Tailwind CSS in your React Native applications.

## Features

- **Expo Managed Workflow**: Easily start your React Native project with Expo.
- **TailwindCSS Integration**: Tailwind CSS is fully integrated using NativeWind.
- **No Navigation Pre-Configured**: Flexibility to choose between `expo-router` or `react-native-navigation` for stack navigation.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PeaceOloruntoba/reactnative-tailwindcss-expo-starter-files.git
   cd reactnative-tailwindcss-expo-starter-files
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run start
   ```
## Using the Template

This template includes Tailwind CSS configured with NativeWind. You can start writing styles using Tailwind classes directly in your React Native components. For example:

```jsx
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
```
### Adding Navigation

Since this starter does not include navigation by default, you can choose to add one of the following navigation methods:

#### Option 1: Using Expo Router

1. Install Expo Router:

   ```bash
   npm install expo-router
   ```
2. **Configure navigation**:
   - **Create a `screens` directory**: 
     Inside your project root, create a directory named `screens`.
   - **Place components (screens) within the `screens` directory**: 
     Add your screen components (e.g., `HomeScreen.js`, `ProfileScreen.js`) inside this directory.
   - **Set up Expo Router in `App.js`** according to the [official documentation](https://docs.expo.dev/versions/latest/sdk/screens/).

#### Option 2: Using React Native Navigation

1. Install React Native Navigation dependencies:

   ```bash
   npm install @react-navigation/native @react-navigation/stack
   npm install react-native-screens react-native-safe-area-context
   ```
2. **Configure navigation**:
   - **Create a `screens` directory**: 
     Inside your project root, create a directory named `screens`.
   - **Place components (screens) within the `screens` directory**: 
     Add your screen components (e.g., `HomeScreen.js`, `ProfileScreen.js`) inside this directory.
3. **Set up your navigation stack in `App.js`**:

   ```jsx
   import React, { useCallback } from "react";
   import { NavigationContainer } from "@react-navigation/native";
   import { createStackNavigator } from "@react-navigation/stack";
   import HomeScreen from "./screens/HomeScreen"; // Ensure this path is correct
   import { View } from "react-native";
   import * as SplashScreen from "expo-splash-screen";
   
   //Prevent the splash screen from auto-hiding
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
   ```
   For more details, refer to the [React Navigation documentation](https://reactnavigation.org/).

### Reporting Issues

If you encounter any bugs or issues while using this starter template, please create an issue in the GitHub repository. We appreciate your feedback and contributions!

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
