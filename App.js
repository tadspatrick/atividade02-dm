import React from "react";
import { View, StyleSheet, Button } from "react-native";

import Chrono from "./scr/components/Chrono";

function App() {
  return (
    <View style={styles.container}>
      <Chrono title="Atividade02" backColor="#EBA113" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
