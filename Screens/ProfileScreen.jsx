import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";

import { BackgroundContainer } from "../Components/background";
import { useNavigation } from "@react-navigation/native";
import {
  Add,
  LikesIcon,
  LogOut,
  MapPin,
  MassagesIcon,
} from "../Components/Icons";
import { PostContainer } from "../Components/PostContainer";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  //   const [showPassword, setShowPassword] = useState(false);
  //   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const data = [
    { id: "1", text: "Post 1" },
    { id: "2", text: "Post 2" },
    { id: "3", text: "Post 3" },
  ];
  return (
    <BackgroundContainer>
      <View style={styles.form}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/avatarGirl.png")}
        />
        <LogOut style={styles.logOut} />
        <Text style={styles.userNameText}>Natalia Romanova</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <PostContainer text={item.text} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 200,
    alignItems: "center",
    backgroundColor: "white",
    // width:"100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    marginTop: -60,
    width: 120,
    height: 120,
    backgroundColor: "gray",
    borderRadius: 16,
  },
  logOut: {
    position: "absolute",
    right: 16,
    top: 22,
  },
    userNameText: {
        paddingBottom: 34,
    marginTop: 27,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
  },
});
