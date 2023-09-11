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
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { BackgroundContainer } from "../Components/background";
import { useNavigation } from "@react-navigation/native";
import { Add } from "../Components/Icons";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const RegistrationScreen = () => {

  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  
  return (


<BackgroundContainer>
      

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -190 : 0 }}>
          <View style={styles.avatarAndButtonContainer}>
              <Image style={styles.avatar} />
              <Add style={styles.orangeButtonAdd}/>
          </View>
          <Text style={styles.text}>Реєстрація</Text>
          <Formik
            initialValues={{
              name: "",
              password: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Home")
            }}>
            {({
              handleChange,
              handleSubmit,
              // handleBlur,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.formikContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("name")}
                  value={values.name}
                  placeholder="Логін"
                  onBlur={() => {
                    setIsShowKeyboard(false);
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                />
                {errors.name && touched.name ? (
                  <Text>{errors.name}</Text>
                ) : null}

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
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          <Text style={styles.loginText}>
            Вже є акаунт?&nbsp;
            <Text style={styles.loginLink} onPress={()=> navigation.navigate("Login", )}>
              Увійти
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </BackgroundContainer>
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
    // fontFamily: "Roboto",
    fontSize: 30,
    // fontStyle: "normal",
    // fontWeight: "700",
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
    position: "absolute",
    // marginLeft: -13,
    right: -13
  },
  formikContainer: {
    width: "100%",
    alignItems: "center",
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
   
    paddingHorizontal: 10,
  },
  passwordInput: {
   width: "80%" 
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
    marginTop: 43,
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
