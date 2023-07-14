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
import OrangeButtonAdd from "./addButton";
import { SubmitRegistration } from "./SubmitRegistration";

// import { SvgXml } from 'react-native-svg';
// import addSvg from '../assets/svg/add.svg';

// export const FormRegistration = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isPasswordVisible, setPasswordVisible] = useState(false);

//   //   const togglePasswordVisibility = () => {
//   //     setPasswordVisible(!isPasswordVisible);
//   //   };

//   const styles = StyleSheet.create({
//     inner: {
//       flex: 1,
//       padding: 24,
    
//     //   justifyContent: "space-around",
//       alignItems: "center",
//     },
//     avatar: {
//       marginTop: -60,
//       width: 120,
//       height: 120,
//       backgroundColor: "#F6F6F6",
//     },

//     text: {
//       marginTop: 30,
//       fontSize: 30,
//     },
//     input: {
//       width: "80%",
//       height: 40,
//       borderWidth: 1,
//       borderRadius: 4,
//       borderColor: "Gray/02",
//       marginTop: 20,
//       paddingHorizontal: 10,
//     },
//     textInput: {
//       marginTop: 30,
//       //   height: 40,
//       borderColor: "#000000",
//     },
//     avatarAndButtonContainer: {
//       //   flex: 1,
//       // alignItems: 'center',
//       // justifyContent: 'center',
//       flexDirection: "row",
//       alignItems: "center",
//       marginLeft: 15,
//     },
//     orangeButtonAdd: {
//       //   position: "absolute",
//       //   marginLeft: -15,
//     },
//   });

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <View style={styles.avatarAndButtonContainer}>
//             <Image style={styles.avatar}></Image>
//             <OrangeButtonAdd style={styles.orangeButtonAdd} />
//           </View>
//           <Text style={styles.text}>Реєстрація</Text>
//           <TextInput style={styles.input} placeholder="Логін" />
//           <TextInput
//             style={styles.input}
//             placeholder="Адреса електронної пошти"
//             onChangeText={setEmail}
//             value={email}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Пароль"
//             secureTextEntry={!isPasswordVisible}
//             onChangeText={setPassword}
//             value={password}
//           />

//           {/* <TouchableOpacity onPress={togglePasswordVisibility}> */}
//           {/* <Text style={styles.text}>
//                 {isPasswordVisible ? "Скрити" : "Показати"}
//               </Text> */}
//           {/* <TextInput placeholder="Username" style={styles.textInput} /> */}
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

export const FormRegistration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
  
    const styles = StyleSheet.create({

      inner: {
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
        marginTop: 30,
        fontSize: 30,
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
  
    return (
        
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.avatarAndButtonContainer}>
              <Image style={styles.avatar} />
              <OrangeButtonAdd style={styles.orangeButtonAdd} />
            </View>
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={!isPasswordVisible}
              onChangeText={setPassword}
              value={password}
                    />
                    <SubmitRegistration />
          </View>
        </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            
    );
  };
  