import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text> ProductList</Text>
      <Link href="/product/1">Go to Product Details1</Link>
      <Link href="/product/2">Go to Product Details2</Link>
      <Link href="/product/3">Go to Product Details3</Link>
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
