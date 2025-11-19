import { useCallback, useState } from "react"

const usePhraseTracking = () => {
  const [usedPhrases, setUsedPhrases] = useState({})

  const markPhraseAsUsed = useCallback((category, phrase) => {
    setUsedPhrases(prev => ({
      ...prev,
      [category]: new Set([...category(prev[category] || []), phrase])
    }))
  }, [])

  const getAvailablePhrases = useCallback((category, allPhrases) => {
    return allPhrases.filter(
      item => !usedPhrases[category]?.has(item.name)
    )
  }, [usedPhrases])

  return {markPhraseAsUsed, getAvailablePhrases}
}

export default usePhraseTracking