import { useCallback, useState } from "react"
import getRandomItem from "../utils/getRandomItem"
import { createLetterGrid } from "../utils/game"

const useGameSession = (categories, phraseTracker) => {
  const [session, setSession] = useState({
    category: null,
    phrase: null,
    grid: []
  })

  const startNewSession = useCallback((category) => {
    const availablePhrases = phraseTracker.getAvailablePhrases(
      category,
      categories[category] || []
    )

    if (availablePhrases.length === 0) return false;

    const selected = getRandomItem(availablePhrases)
    if (!selected) return false;

    setSession({
      category,
      phrase: selected.name,
      grid: createLetterGrid(selected.name)
    })

    phraseTracker.markPhraseAsUsed(category, selected.name)
    return true;
  }, [categories, phraseTracker])

  const clearSession = useCallback(() => {
    setSession({
      category: null,
      phrase: null,
      grid: []
    })
  }, [])

  return {session, startNewSession, clearSession}
}