import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function KanjiCard({ kanji }) {
  if (!kanji) {
    return (
      <View style={styles.card}>
        <Text style={styles.placeholder}>🔄 Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.symbol}>{kanji.symbol || "?"}</Text>
      <Text style={styles.meaning}>{kanji.meaning}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Kana:</Text>
        <Text style={styles.value}>{kanji.kana?.join(", ")}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Romaji:</Text>
        <Text style={styles.value}>{kanji.romaji?.join(", ")}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Hint:</Text>
        <Text style={styles.value}>{kanji.hint}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>JLPT Level:</Text>
        <Text style={styles.value}>{kanji.jlptLevel || "N/A"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  placeholder: {
    fontSize: 22,
    color: "#888",
  },
  symbol: {
    fontSize: 90,
    color: "#333",
  },
  meaning: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  section: {
    width: "100%",
    alignItems: "center",
    marginVertical: 4,
  },
  label: {
    fontWeight: "bold",
    color: "#007AFF",
  },
  value: {
    color: "#444",
    fontSize: 16,
  },
});
