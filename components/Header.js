import React from "react";
import { View, Text, StyleSheet } from "react-native";

//import colors
import Color from "../constants/Color";

export default Headers = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    paddingTop: 36,
    backgroundColor: Color.primaryColor,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerTitle: {
    color: Color.accent,
    margin: 30,
    fontWeight: "bold",
    fontSize: 18,
  },
});
