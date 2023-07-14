
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Linking,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Button,
    TouchableWithoutFeedback, // імпорт компонента обгортки
    Keyboard, // імпорт компонента клавіатури
  } from "react-native";
  import { useFonts } from "expo-font";
  import React, { useState } from "react";
  import { FormRegistration } from "./FormRegistration";
  
  
  // import { SvgXml } from 'react-native-svg';
  // import addSvg from '../assets/svg/add.svg';
  
export const SubmitRegistration = () => {

    const onPress = () => setCount((prevCount) => prevCount + 1);
    const handleLogin = () => {
      console.log("Navigate to the login screen");
    };
    const styles = StyleSheet.create({
        submitContainer: {
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 300,
              marginBottom:50
        },
        registrationButton: {
            backgroundColor: "#FF6C00",
            width: 343,
            height: 51,
            paddingHorizontal: 32,
            paddingVertical: 16,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 43,
        },
        loginText: {
            marginTop: 20,
            fontSize: 16,
        },
        loginLink: {
            color: "blue",
            textDecorationLine: "underline",

        },

    });

    return (
        <View style={styles.submitContainer}>
            <TouchableOpacity
                style={styles.registrationButton}
                onPress={onPress}>
                <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>
                Вже є акаунт?&nbsp;
                <Text style={styles.loginLink} onPress={handleLogin}>
                    Увійти
                </Text>
            </Text></View>
    )
}