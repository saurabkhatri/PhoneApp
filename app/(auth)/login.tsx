import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function logIn() {
  return (
    <View style={styles.container}>
      <Text>logIn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
