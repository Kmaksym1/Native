import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export const ActionButton = ({ buttonText }) => {
    
  return (
    <TouchableOpacity style={styles.registrationButton}>
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
      width: "90%",
    backgroundColor: "#FF6C00",
    height: 51,
    paddingHorizontal: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
