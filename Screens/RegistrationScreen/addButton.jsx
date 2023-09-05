import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const OrangeButtonAdd = () => {
  const styles = StyleSheet.create({
    buttonContainer: {
      left: -12,
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 50,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    xLine: {
      position: 'absolute',
      width: '60%',
      height: 2,
      backgroundColor: 'orange',
    },
    xLineVertical: {
      transform: [{ rotate: '90deg' }],
    },
  });

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={[styles.xLine, styles.xLineVertical]} />
      <View style={[styles.xLine, styles.xLineHorizontal]} />
    </TouchableOpacity>
  );
};

export default OrangeButtonAdd;
