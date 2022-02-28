import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//component required
import Card from "../components/Card";
import Input from "../components/Input";

//import Colors
import Color from "../constants/Color";

export default function StartGame() {
  const [entredValue, setEntredValue] = useState("");

  const numberInputHandler = (inputText) => {
    setEntredValue(inputText.replace(/[0-9]]/g, ""));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Strart New Geme</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number </Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={entredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' onPress={() => {}} color={Color.thierd} />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={() => {}}
                color={Color.finalColor}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
