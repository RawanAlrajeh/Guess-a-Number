import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StartGame />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
