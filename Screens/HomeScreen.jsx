import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { CrPoSC } from "./CrPoSC";

import { ArrayLeft, Grid, PlusIcon, User } from "../Components/Icons";
import { ProfileScreen } from "./ProfileScreen";
import { PostsScreen } from "./PostsScreen";
import { useNavigation } from "@react-navigation/native";
import { CreatePostsScreen } from "./CreatePostsScreen";

import {LogOutComponent} from "../Components/logOutComponent"
import { useSelector } from "react-redux";
import { postsUploading } from "../Redux/Posts/postSelector";
// import { currentUser } from "../Redux/Users/authSelector";
// import { useSelector } from "react-redux";

const Tabs = createBottomTabNavigator();

export const Home = () => {

  const navigation = useNavigation();
  
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let strokeColor = focused ? "white" : "#212121";
          let fillcolor = focused ? "#FF6C00" : "none";
          if (route.name === "Posts Screen") {
            return (
              <View style={focused ? styles.buttonActive : null}>
                <Grid fillcolor={fillcolor} strokeColor={strokeColor} />
              </View>
            );
          } else if (route.name === "CreatePostsScreen") {
            return (
              <View style={focused ? styles.buttonActive : null}>
                <PlusIcon strokeColor={strokeColor} />
              </View>
            );
          } else if (route.name === "Profile Screen") {
            return (
              <View style={focused ? styles.buttonActive : null}>
                <User strokeColor={strokeColor} />
              </View>
            );
          }
        },
        tabBarLabel: () => null,
      })}>
      <Tabs.Screen
        name="Posts Screen"
        component={PostsScreen}
        options={{
                  title: "Публікації",
                  headerRight: () => (
                <LogOutComponent />
                    
                      
              ) }}
      />
          <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen}
              options={{
                title: "Створити публікацію",
                  headerLeft: () => (
            <ArrayLeft
            onPress={() => {
                navigation.navigate("Home", { screen: "Posts Screen" })
              }}
            />
                  )
              }}
          />
      <Tabs.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{ headerStyle: { height: 0 } }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonActive: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
