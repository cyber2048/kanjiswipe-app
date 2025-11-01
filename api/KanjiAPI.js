const BASE_URL = "https://kanji-flash-backend-v2.onrender.com/api";

export const fetchRandomKanji = async () => {
  const response = await fetch(`${BASE_URL}/kanji/random`);
  const data = await response.json();
  return data;
};
