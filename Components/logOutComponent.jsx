import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, } from "react-native";
import { useDispatch } from "react-redux";
import { signOutUser } from "../Redux/Users/authOperations";
import { LogOut } from "./Icons";

export const LogOutComponent = ({style}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleSignOut = () => {
      dispatch(signOutUser());
      navigation.navigate("Login")
  };
  return (
      <TouchableOpacity style={[styles.out, style]}
      
          onPress={handleSignOut}>
      <LogOut  />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    out: {
        position:"absolute",
        paddingRight: 18,
    }

})