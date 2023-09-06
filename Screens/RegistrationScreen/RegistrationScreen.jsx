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
  Keyboard, // імпорт компонента клавіатури
} from "react-native";

import OrangeButtonAdd from "./addButton";
// import { ActionButton } from "../../Components/actionButton";

export const RegistrationScreen = () => {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const userData = () => {
    Alert.alert(
      "Credentials",
      `Name:${userName}, User email: ${userEmail}, Password: ${password}`
    );
  };

  const handleLogin = () => {
    Alert.alert(
      "Route to LogIn page"
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -190 : 0 }}>
          <View style={styles.avatarAndButtonContainer}>
            <Image style={styles.avatar} />
            <OrangeButtonAdd style={styles.orangeButtonAdd} />
          </View>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={userName}
            placeholder="Логін"
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            onBlur={() => {
              setIsShowKeyboard(false);
            }}
          />
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
          <TouchableOpacity
            style={styles.registrationButton}
            onPress={userData}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            Вже є акаунт?&nbsp;
            <Text style={styles.loginLink} onPress={handleLogin}>
              Увійти
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
    paddingBottom: 78,
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
    fontWeight: "500",
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
    marginBottom: 43,
    paddingHorizontal: 10,
  },
  submitContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  registrationButton: {
    width: "90%",
    backgroundColor: "#FF6C00",
    height: 51,
    paddingHorizontal: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
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
