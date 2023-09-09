import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
    Keyboard,
    ImageBackground
} from "react-native";

export const BackgroundContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/images/PhotoBG.png")}
          style={styles.image}>
          {children}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
