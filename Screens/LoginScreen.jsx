import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard, // імпорт компонента клавіатури
} from "react-native";

import { ActionButton } from "../Components/actionButton";

export const LoginScreen = () => {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleLogin = () => {
    console.log("Navigate to the login screen");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -240 : 0 }}>
          <Text style={styles.text}>Увійти</Text>

          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            onChangeText={setEmail}
            value={userEmail}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            onBlur={() => {
              setIsShowKeyboard(false);
            }}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
              }}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>
                {showPassword ? "Сховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>

          <ActionButton buttonText="Увійти"/>
          <Text style={styles.loginText}>
            Немає акаунту?&nbsp;
            <Text style={styles.loginLink} onPress={handleLogin}>
              Зареєструватися
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 144,
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

  text: {
    marginTop: 27,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  avatarAndButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  orangeButtonAdd: {
    marginLeft: -15,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginTop: 20,
    marginBottom:43,
    paddingHorizontal: 10,

  },
  toggleButtonText: {
    color: "#1B4371",
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    color: "#1B4371",
  },
  loginLink: {
    color: "#1B4371",
    textDecorationLine: "underline",
  },
});