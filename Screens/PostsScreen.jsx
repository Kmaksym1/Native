import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import { LogOut } from "../Components/Icons";
import { PostContainer } from "../Components/PostContainer";

export const PostsScreen = () => {

  const data = [
    { id: "1", text: "Post 1" },
    { id: "2", text: "Post 2" },
    { id: "3", text: "Post 3" },
  ];
  return (
    <SafeAreaView style={styles.postsContainer}>
      
        
          <View style={styles.userCard}>
            <ImageBackground
              source={require("../assets/images/avatarGirl.png")}
              style={styles.image}></ImageBackground>
            <View style={styles.userData}>
              <Text style={styles.userNameText}>Natali Romanova</Text>
              <Text>email@example.com</Text>
            </View>
          </View>

      
      <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
        renderItem={({ item }) => <PostContainer text={item.text} hide={ true} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.posts}

        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.30)",
  },
  text: {
    paddingBottom: 11,
    fontSize: "17px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  logOut: {
    position: "absolute",
    right: 16,
    top: 0,
  },

  userCard: {
    marginTop: 32,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom:32,
  },
  userData: {
    paddingHorizontal: 8,
  },
  userNameText: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

});
