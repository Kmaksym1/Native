
import {StyleSheet, View, ImageBackground, TouchableWithoutFeedback,Keyboard} from "react-native";
import { LoginScreen } from "./Screens/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";
import { PostsScreen } from "./Screens/PostsScreen";

export default function App1() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <ImageBackground
        source={require("./assets/images/PhotoBG.png")}
        style={styles.image}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
        {/* <PostsScreen /> */}
        </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});