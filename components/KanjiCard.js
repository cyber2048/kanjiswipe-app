import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function KanjiCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.kanji}>生</Text>
      <Text style={styles.meaning}>Life / Birth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 40,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  kanji: {
    fontSize: 80,
    color: "#333",
  },
  meaning: {
    fontSize: 20,
    color: "#666",
    marginTop: 10,
  },
});
