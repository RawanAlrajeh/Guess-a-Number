import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

export default function GameScreen(props) {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndmNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndmNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndmNum;
    }
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={() => {}} />
        <Button title='GREATER' onPress={() => {}} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: 300,
    maxWidth: "80%",
  },
});
