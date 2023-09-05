import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const ActionButton = ({ buttonText, widthOfButtonComp }) => {
    
    const onPress = () => setCount((prevCount) => prevCount + 1);
    
    const widthOfButton = widthOfButtonComp ? widthOfButtonComp : "90%";
    
  return (
    <TouchableOpacity style={{...styles.registrationButton, width: widthOfButton}} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  submitContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  registrationButton: {
    backgroundColor: "#FF6C00",
    height: 51,
    paddingHorizontal: 32,
    // paddingVertical: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 43,
  },
});
