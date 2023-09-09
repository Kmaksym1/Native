import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";
import Home from "./Screens/HomeScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ArrayLeft } from "./Components/Icons";
import { CommentsScreen } from "./Screens/CommentsScreen";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen}
        options={{ title: null, headerShown: false, headerLeft: null }}/>
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: null, headerShown: false, headerLeft: null }}
        />
        <MainStack.Screen name="Home" component={Home} 
          // options={{headerStyle: { height: 0 }}}
          options={{
            headerShown: false
          }}
        />
        {/* <MainStack.Screen
          name="Створити публікацію"
          component={CreatePostsScreen}
          options={{
            headerLeft: () => (
              <ArrayLeft
                onPress={() => alert("This is a button!")}
              />
            ),
          }}
        /> */}
        <MainStack.Screen
          name="Коментарі"
          component={CommentsScreen}
          options={{
            headerLeft: () => (
              <ArrayLeft
                onPress={() => alert("This is a button!")}
              />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
