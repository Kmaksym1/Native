import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostsScreen } from "./CreatePostsScreen";

import { ArrayLeft, Grid, LogOut, PlusIcon, User } from "../Components/Icons";
import { ProfileScreen } from "./ProfileScreen";
import { PostsScreen } from "./PostsScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
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
          } else if (route.name === "Create Posts Screen") {
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
                <View style={{ paddingRight: 18 }}><LogOut 
                  onPress={() => alert("This is LogOut!")}
                /></View>
                      
              ) }}
      />
          <Tabs.Screen name="Create Posts Screen" component={CreatePostsScreen}
              options={{
                title: "Створити публікацію",
                  headerLeft: () => (
            <ArrayLeft
              onPress={() => alert("This is a button!")}
            />
          )}}
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

export default Home;
