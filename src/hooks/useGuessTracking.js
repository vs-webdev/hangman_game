import { useCallback, useState } from "react"

const useGuessTracking = (selectedName, maxWrongGuesses) => {
  const [guessedLetters, setGuessedLetters] = useState(new Set())
  const [wrongGuesses, setWrongGuesses] = useState(0)

  const makeGuess = useCallback((letter) => {
    const lowerCasedLetters = letter.toLowerCase()

    if (guessedLetters.has(lowerCasedLetters)) {
      return {isNew: false, isCorrect: false}
    }

    const phraseLetters = new Set(selectedName.toLowerCase().replace(/[^a-z]/g, '').split(''))
    const isCorrect = phraseLetters.has(lowerCasedLetters)

    setGuessedLetters(prev => new Set([...prev, lowerCasedLetters]))

    if (!isCorrect) {
      setWrongGuesses(prev => prev + 1)
    }

    return {isNew: true, isCorrect}
  }, [guessedLetters, currentPhrase])

  const reset = useCallback(() => {
    setGuessedLetters(new Set())
    setWrongGuesses(0)
  })

  const remainingLives = maxWrongGuesses - wrongGuesses;

  return {
    guessedLetters,
    wrongGuesses,
    remainingLives,
    makeGuess,
    reset
  }
}

export default useGuessTracking