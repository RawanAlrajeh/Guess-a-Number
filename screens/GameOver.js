import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number Of Round: {props.roundNumbr} </Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title='Start New Game' onPress={props.onNewGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
