import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { ArrayLeft } from "./Components/Icons";
import { CommentsScreen } from "./Screens/CommentsScreen";
import * as Font from "expo-font";
import { MapScreen } from "./Screens/MapScreen";
import { Home } from "./Screens/HomeScreen";
const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"), 
      });
    }
  
    loadFonts();
  }, []);
  
  // const [fontsLoaded] = useFonts({
  //   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  //   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: null, headerShown: false, headerLeft: null }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: null, headerShown: false, headerLeft: null }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <MainStack.Screen
          
          name="Comments"
          component={CommentsScreen}
          options={({navigation}) => ({
            title: "Коментарі",
            headerLeft: () => (
              <ArrayLeft
                onPress={() => {
                  navigation.navigate("Home");
                }}
              />
            ),
          })}
        />
        <MainStack.Screen
          
          name="MapScreen"
          component={MapScreen}
          options={({navigation}) => ({
            title: "Карта",
            // headerRight: () => (
            //   <ArrayLeft
            //     onPress={() => {
            //       // navigation.navigate("Home", { screen: "Posts Screen" })
            //         console.log("tap back");
            //     }}
            //   />
            // ),
          })}
        />
      </MainStack.Navigator>
      
    </NavigationContainer>
  );
}
