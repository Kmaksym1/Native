import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import { Grid, PlusIcon, User } from "../Components/Icons";
export const TabBar = () => {
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.footer}>
      <Grid />

      <TouchableOpacity style={styles.registrationButton} onPress={onPress}>
        <PlusIcon />
      </TouchableOpacity>

      <User />
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.30)",
    paddingTop: 9,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 90,
  },
  registrationButton: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 51,
    paddingHorizontal: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
