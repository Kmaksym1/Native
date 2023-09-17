import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import { LoginScreen } from "./Screens/LoginScreen";
import { ArrayLeft } from "./Components/Icons";
import { CommentsScreen } from "./Screens/CommentsScreen";
import * as Font from "expo-font";
import { MapScreen } from "./Screens/MapScreen";
import { Home } from "./Screens/HomeScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { persistor, store } from "./Redux/store";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
    
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate
        // loading={<Loader />}
        persistor={persistor}>
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
          options={() => ({
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
       </PersistGate>
      </Provider>
  );
}
