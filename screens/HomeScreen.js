import React from "react";
import { View, Text } from "react-native";
import KanjiCard from "../components/KanjiCard";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <KanjiCard />
    </View>
  );
}
