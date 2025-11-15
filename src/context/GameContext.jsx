import { createContext, useContext, useEffect, useState } from "react";
import data from "../data.json"
import getRandomItem from "../utils/getRandomItem";

const GameContext = createContext(null)

export const GameProvider = ({children}) => {
  const [categories, setCategories] = useState(data.categories)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedName, setSelectedName] = useState(null)

  useEffect(() => {
    if (!selectedCategory) return;

    const list = categories[selectedCategory];
    if (!list) return;

    const randomItem = getRandomItem(list);
    if (!randomItem) {
      setSelectedName(null);
      return;
    }

    // Update selectedName
    setSelectedName(randomItem.name);

    // Mark item as selected in categories state
    const updatedList = list.map(item =>
      item.name === randomItem.name
        ? { ...item, selected: true }
        : item
    );

    setCategories(prev => ({
      ...prev,
      [selectedCategory]: updatedList
    }));

  }, [selectedCategory]);
  
  const value = {
    selectedName,
    selectedCategory, setSelectedCategory,
    categories, setCategories,
  }

  return (
    <GameContext.Provider value={value}>
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