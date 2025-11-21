import { createContext, useContext } from "react";
import data from "../data.json"
import useGameLogic from "../hooks/useGameLogic";

const GameContext = createContext(null)

export const GameProvider = ({children}) => {
  const game = useGameLogic(data.categories)

  return (
    <GameContext.Provider value={game}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame should be used within GameProvider")
  }
  return context
}