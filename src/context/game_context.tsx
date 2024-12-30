// src/context/game_context.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

export type CharacterIndex = 0 | 1 | 2;
type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

type GameContextType = {
  selectedIndexCharacter: CharacterIndex;
  level: Level;
  setSelectedIndexCharacter: (index: CharacterIndex) => void;
  setLevel: (level: Level) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  // Ya existente para el índice del personaje
  const [selectedIndexCharacter, setSelectedIndexCharacter] = useState<CharacterIndex>(0);

  // Nuevo estado para manejar el nivel (piso de la torre)
  const [level, setLevel] = useState<Level>(1);

  const value: GameContextType = {
    selectedIndexCharacter,
    setSelectedIndexCharacter,
    level,
    setLevel,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
