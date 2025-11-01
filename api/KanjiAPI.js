const BASE_URL = "https://kanji-flash-backend-v2.onrender.com/api";

export const fetchRandomKanji = async () => {
  const res = await fetch(`${BASE_URL}/kanji/random`);
  return await res.json();
};
