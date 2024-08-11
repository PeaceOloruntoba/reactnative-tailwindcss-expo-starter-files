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
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-xl font-bold text-black`}>Hello, World!</Text>
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
   import * as React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createStackNavigator } from '@react-navigation/stack';
   import HomeScreen from './screens/HomeScreen';

   const Stack = createStackNavigator();

   export default function App() {
     return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
       </NavigationContainer>
     );
   }
   ```
   For more details, refer to the [React Navigation documentation](https://reactnavigation.org/).

### Reporting Issues

If you encounter any bugs or issues while using this starter template, please create an issue in the GitHub repository. We appreciate your feedback and contributions!

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
