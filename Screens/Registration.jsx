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
import { SubmitRegistration } from "./SubmitRegistration";
import OrangeButtonAdd from "./addButton";

// import { SvgXml } from 'react-native-svg';
// import addSvg from '../assets/svg/add.svg';


export const Registration = () => {
    
  
    return (

// > ‹View style=(styles.form}>
// <View>
// <Text style={styles. inputTitle]>EMAIL ADDRES</Text>
// <TextInput style={styles. input} textAlign={"center"} />
// </View>
// ‹View style={{ marginTop: 20 }1>
// <Text style={styles.inputTitle]>PASSWORD</Text>
// <TextInput
// style=(styles. input}
// textAlign={"center"}
// secureTextEntry={true}
// />
// </View>
// «Touchable0pacity activeOpacity={0.8} style={styles.btn}>
// <Text stvles{stvles.btnTitle…>SIGN IN</Text>
// </Touchable0pacity>
// </View»

    
<KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                
          <View style={styles.form}>
            {/* <View style={styles.avatarAndButtonContainer}>
              <Image style={styles.avatar} />
              <OrangeButtonAdd style={styles.orangeButtonAdd} />
            </View> */}
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            //   onChangeText={setEmail}
            //   value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
            //   secureTextEntry={!isPasswordVisible}
            //   onChangeText={setPassword}
            //   value={password}
                    />
                    {/* <SubmitRegistration /> */}
          </View>
        </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //     style={{ flex: 1 }}
    //   >
    //     <View style={styles.allContainer}>
    //       <View style={styles.registrationContainer}>
    //         <FormRegistration />
    //       </View>
  
          
    //     </View>
    //   </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
        alignItems: "center",
      },
      avatar: {
        marginTop: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
      },
      text: {
        fontFamily: 'Cochin',
          fontSize: 30,
          fontWeight: 'bold',
      },
      input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "Gray/02",
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
});
