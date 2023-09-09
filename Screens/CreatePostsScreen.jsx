import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { Camera, MapPin, Trash } from "../Components/Icons";

export const CreatePostsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    return (
      <SafeAreaView>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.createPostsContainer}>
          <ImageBackground style={styles.image}>
            <View style={styles.cameraicon}>
              <Camera />
            </View>
          </ImageBackground>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              //   onChangeText={handleChange("email")}
              //   value={values.email}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
            />
            <View style={styles.mapInput}>
              <MapPin/>
              <TextInput
                style={{ width: "80%" }}
                placeholder="Місцевість..."
                //   onChangeText={handleChange("email")}
                //   value={values.email}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setIsShowKeyboard(false);
                }}
              />
                      </View>
                      <TouchableOpacity
                  style={styles.submitButton}
                      //   onPress={handleSubmit}
                      >
                  <Text style={{...styles.buttonText, ...styles.text}}>Опублікувати</Text>
                </TouchableOpacity>

                <View
                  style={{
                    top: 130,
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#F6F6F6",
                    justifyContent: "center",
                
                alignItems: "center",
                    alignSelf: "center",
                alignContent:"flex-end"
              }}
            >
              <Trash />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createPostsContainer: {
    // position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "white",
    height: "100%",
  },
  image: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraicon: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 32,
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
  mapInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 16,
    paddingBottom: 16,
    },
    submitButton:{
        backgroundColor: "#F6F6F6",
        height: 51,
        paddingHorizontal: 32,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 43,
    },
});
