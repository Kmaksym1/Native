import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
} from "react-native";
import { ArrowUp, Camera, MapPin } from "../Components/Icons";
import { useNavigation } from "@react-navigation/native";

export const CommentsScreen = () => {
  // const navigation = useNavigation();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            ...styles.commentsContainer,
            paddingBottom: isShowKeyboard ? 100 : 16,
          }}>
          <ScrollView>
            <Image
              source={require("../assets/images/RectangleSunSet.png")}
              style={styles.image}>
            </Image>
            <View style={styles.ava_text_container}>
              <Image
                style={styles.ava}
                source={require("../assets/images/avatarHighscrapers.png")}
              />
              <View style={styles.commentTextContainer}>
                <Text>
                  Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text
                  style={{
                    ...styles.text,
                    paddingTop: 8,
                    alignSelf: "flex-end",
                  }}>
                  09 червня, 2020 | 08:40
                </Text>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              ...styles.newCommentContainer,
              bottom: isShowKeyboard ? 100 : 32,
            }}>
            <TextInput
              style={{
                width: "90%",
                paddingTop: 16,
                paddingBottom: 15,
                paddingRight: 15,
              }}
              placeholder="Коментувати..."
              //   onChangeText={handleChange("email")}
              //   value={values.email}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
            />

            <TouchableOpacity
              style={styles.sendButton}
              //   onPress={handleSubmit}
            >
              <ArrowUp />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  commentsContainer: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    height: "100%",
    paddingTop: 32,

    // justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  ava_text_container: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    //   gap: 16,
    // width:"90%"
    // height:"100%"
  },
  ava: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  commentTextContainer: {
    padding: 16,
    width: "90%",
    borderTopEndRadius: 6,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
    backgroundColor: "#F6F6F6",
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 16,
    paddingBottom: 16,
  },
  newCommentContainer: {
    position: "absolute",
    width: "100%",
    height: 50,
    left: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  sendButton: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",

    // paddingHorizontal: 32,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 43,
  },
});
