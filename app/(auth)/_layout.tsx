import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function _layout() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>_layout</Text>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Slot />
    </SafeAreaView>
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
