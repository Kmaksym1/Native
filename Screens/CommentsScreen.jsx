import React, { useEffect, useState } from "react";
import {
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
import { ArrowUp } from "../Components/Icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updatePost } from "../Redux/Posts/postOperations";
import { CommentsContainer } from "../Components/CommentsContainer";

export const CommentsScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const moment = require("moment");
  moment.locale("uk"); // Set the locale to Ukrainian

  const { item } = route.params;
  const postId = item.id;
  console.log("comment!@#!#",item.comments);
  const [comment, setComment] = useState("");
  // useEffect(() => {}, []);

  const commentSend = () => {
    const date = moment().utcOffset("+05:00").format("MMMM DD , YYYY | hh:mm");
    dispatch(updatePost({ postId, comment, date }));
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            ...styles.commentContainer,
            paddingBottom: isShowKeyboard ? 100 : 16,
          }}>
          <Image source={{ uri: item.photoUri }} style={styles.image}></Image>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={item.comments}
            renderItem={({ comments }) => <Text>{comments}</Text>}
            keyExtractor={(element) => element.length}
          ></FlatList>
      
      {/* <ScrollView
  showsVerticalScrollIndicator={false}
  data={item.comments} // Use item.comment as the data if it's an array of comments
>
        {item.comments.map((element) => (<CommentsContainer key={element.length} com={element} />
    // <Text key={element.length}>{element}</Text> // Use element.comments to display each comment
  ))}
</ScrollView> */}

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
              onChangeText={setComment}
              value={comment}
              placeholder="Коментувати..."
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
            />

            <TouchableOpacity style={styles.sendButton} onPress={commentSend}>
              <ArrowUp />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    height: "100%",
    paddingTop: 32,
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
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});
