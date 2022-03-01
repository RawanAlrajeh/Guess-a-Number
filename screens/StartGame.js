import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

//component required
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

//import Colors
import Color from "../constants/Color";

export default function StartGame(props) {
  const [entredValue, setEntredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, SetSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEntredValue(inputText.replace(/[0-9]]/g, ""));
  };

  const resetInputHandler = () => {
    setEntredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(entredValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "A Number has to be number between 1 to 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    SetSelectedNumber(chooseNumber);
    setEntredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.resultOutput}>
        <Text style={{ fontSize: 15, paddingBottom: 10 }}>You Selecte </Text>
        <NumberContainer style={styles.resultNumber}>
          {selectedNumber}
        </NumberContainer>
        <Button
          title='START GAME'
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        {/* <Text style={styles.title}>Strart New Geme</Text> */}
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
              <Button
                title='Reset'
                onPress={resetInputHandler}
                color={Color.thierd}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={confirmInputHandler}
                color={Color.finalColor}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
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
    margin: "30%",
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
  resultOutput: {
    // marginTop: 22,
    fontSize: 22,
    alignItems: "center",
  },
  resultNumber: {
    fontSize: 22,
  },
});
