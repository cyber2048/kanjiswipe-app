import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Swiper from "react-native-deck-swiper";
import KanjiCard from "../components/KanjiCard";
import { fetchRandomKanji } from "../api/kanjiAPI";
import { KanjiContext } from "../context/KanjiContext";

export default function HomeScreen() {
  const [kanjis, setKanjis] = useState([]);
  const [loading, setLoading] = useState(true);
  const { saveKanji } = useContext(KanjiContext);

  useEffect(() => {
    loadKanjis();
  }, []);

  const loadKanjis = async () => {
    setLoading(true);
    const newKanjis = [];
    for (let i = 0; i < 5; i++) {
      const data = await fetchRandomKanji();
      newKanjis.push(data);
    }
    setKanjis(newKanjis);
    setLoading(false);
  };

  const handleSwipeLeft = (index) => {
    const selected = kanjis[index];
    saveKanji(selected);
    console.log("Saved Kanji:", selected.symbol);
  };

  const handleSwipeRight = async () => {
    const data = await fetchRandomKanji();
    setKanjis((prev) => [...prev, data]);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Swiper
        cards={kanjis}
        renderCard={(kanji) => <KanjiCard kanji={kanji} />}
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
        stackSize={3}
        backgroundColor="#f7f8fa"
        cardVerticalMargin={60}
        overlayLabels={{
          left: { title: "SAVE", style: { label: { color: "green", fontSize: 30 } } },
          right: { title: "NEXT", style: { label: { color: "blue", fontSize: 30 } } },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
