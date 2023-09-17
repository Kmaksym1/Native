import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList
} from "react-native";
import { useDispatch } from "react-redux";
import { CommentsContainer } from "../Components/CommentsContainer";
import { updatePost } from "../Redux/Posts/postOperations";


export const CommentsScreen1 = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const moment = require("moment");
    moment.locale("uk"); // Set the locale to Ukrainian
  
    const { item } = route.params;
    const postId = item.id;
    console.log(item.comment);
    const [comment, setComment] = useState("");
    // useEffect(() => {}, []);
  
    const commentSend = () => {
      const date = moment().utcOffset("+05:00").format("MMMM DD , YYYY | hh:mm");
      dispatch(updatePost({ postId, comment, date }));
    };
  return (
    <SafeAreaView style={styles.commentContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item}
            renderItem={({ item }) => <CommentsContainer item={item} />}
            keyExtractor={(item) => item.id}
          />

      
    </SafeAreaView>
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
  