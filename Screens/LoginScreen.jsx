import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard, // імпорт компонента клавіатури
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const LoginScreen = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleLogin = () => {
    Alert.alert("Route to Main page");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -240 : 0 }}>
          <Text style={styles.text}>Увійти</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              Alert.alert(
                "Credentials",
                `email: ${values.email}, password: ${values.password}`
              );
            }}>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={styles.formikContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                  }}
                />
                {errors.email && touched.email ? (
                  <Text>{errors.email}</Text>
                ) : null}
                <View style={styles.passwordInputContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Пароль"
                    secureTextEntry={!showPassword}
                    value={values.password}
                    onChangeText={handleChange("password")}
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
                
                {errors.password && touched.password ? (
                  <Text>{errors.password}</Text>
                ) : null}
                <TouchableOpacity
                  style={styles.registrationButton}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

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
  formikContainer: {
    width: "100%",
    alignItems: "center",
  },
  passwordInput: {
   width:"80%", 
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
