import React, { createContext, useState } from "react";

export const KanjiContext = createContext();

export const KanjiProvider = ({ children }) => {
  const [savedKanjis, setSavedKanjis] = useState([]);

  const saveKanji = (kanji) => setSavedKanjis((prev) => [...prev, kanji]);

  return (
    <KanjiContext.Provider value={{ savedKanjis, saveKanji }}>
      {children}
    </KanjiContext.Provider>
  );
};
