import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { BackgroundContainer } from "../Components/background";
import { LogOutComponent } from "../Components/logOutComponent";
import { PostContainer } from "../Components/PostContainer";
import { getPosts } from "../Redux/Posts/postOperations";
import { fetchAllPosts } from "../Redux/Posts/postSelector";
import { currentUser } from "../Redux/Users/authSelector";

export const ProfileScreen = () => {
  const dataUser = useSelector(currentUser);
  const allPosts = useSelector(fetchAllPosts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  console.log("allPostsProfile",allPosts)
  return (
    <BackgroundContainer>
      <View style={styles.form}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/avatarGirl.png")}
        />
        <LogOutComponent style={styles.logOut} />
        <Text style={styles.userNameText}>{dataUser.displayName}</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={allPosts}
          renderItem={({ item }) => <PostContainer item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    // width:"100%",
    flex: 1,
    marginTop: 200,
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  avatar: {
    marginTop: -60,
    width: 120,
    height: 120,
    backgroundColor: "gray",
    borderRadius: 16,
  },
  logOut: {
    right: 0,
    top: 10,
  },
  userNameText: {
    paddingBottom: 34,
    marginTop: 27,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
  },
});
