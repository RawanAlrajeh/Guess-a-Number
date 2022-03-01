import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props) {
  return <TextInput {...props} style={{ ...style.input, ...props.style }} />;
}

const style = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
