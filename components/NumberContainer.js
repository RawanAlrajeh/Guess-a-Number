import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Color from "../constants/Color";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    // color: Color.primaryColor,
    fontSize: 20,
  },
});

export default NumberContainer;
