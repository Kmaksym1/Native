import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList
} from "react-native";
import {currentUser} from "../Redux/Users/authSelector"

import { PostContainer } from "../Components/PostContainer";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../config";
import { useNavigation } from "@react-navigation/native";
import { fetchAllPosts } from "../Redux/Posts/postSelector";
import { getPosts } from "../Redux/Posts/postOperations";

export const PostsScreen = () => {
  const navigation = useNavigation();
  const dataUser = useSelector(currentUser);
  const allPosts = useSelector(fetchAllPosts)
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Подписываемся на изменения состояния аутентификации
    const unsubscribe = auth.onAuthStateChanged((user) => {
    dispatch(getPosts())
      if (user) {
        // Пользователь вошел в систему
        console.log('Пользователь вошел в систему', dataUser.displayName);
          navigation.navigate("Home");
        
        
      } else {
        // Пользователь вышел из системы
        console.log('Пользователь вышел из системы');
        navigation.navigate("Login");
      }
    });

    // Отписываемся от события при размонтировании компонента
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SafeAreaView style={styles.postsContainer}>
        
          <View style={styles.userCard}>
            <ImageBackground
              source={require("../assets/images/avatarGirl.png")}
              style={styles.image}></ImageBackground>
            <View style={styles.userData}>
              <Text style={styles.userNameText}>{dataUser.displayName}</Text>
              <Text>{dataUser.email}</Text>
            </View>
          </View>
      <FlatList
          showsVerticalScrollIndicator={false}
        data={allPosts}
        
        renderItem={({ item }) => <PostContainer item={item} hide={true} />}
        keyExtractor={(item) => item.id}
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
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 700,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

});
