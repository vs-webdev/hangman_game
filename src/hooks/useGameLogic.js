import { useCallback, useEffect } from "react"
import { GAME_CONFIGS, GAME_STATUS } from "../shared/constants"
import useGameSession from "./useGameSession"
import useGameStatus from "./useGameStatus"
import useGuessTracking from "./useGuessTracking"
import useLetterGrid from "./useLetterGrid"
import usePhraseTracking from "./usePhraseTracking"
import { isGameWon } from "../utils/game"

const useGameLogic = (categories) => {
  const phraseTracker = usePhraseTracking()
  const {session, startNewSession, clearSession} = useGameSession(categories, phraseTracker)
  const guessTracker = useGuessTracking(session.phrase, GAME_CONFIGS.MAX_WRONG_GUESSES)
  const {grid, revealLetter, revealAll} = useLetterGrid(session.grid)
  const gameStatus = useGameStatus()

  const startGame = useCallback((category) => {
    const started = startNewSession(category)
    if (started) {
      guessTracker.reset()
      gameStatus.startPlaying()
    }
  }, [startNewSession, guessTracker, gameStatus])

  const guessLetter = useCallback((letter) => {
    if (gameStatus.status !== GAME_STATUS.PLAYING) return;
    const result = guessTracker.makeGuess(letter)
    if (!result.isNew) return;
    if (result.isCorrect) revealLetter(letter)
  }, [gameStatus.status, guessTracker, revealLetter])

  useEffect(() => {
    if (gameStatus.status !== GAME_STATUS.PLAYING) return;

    if (isGameWon(grid)) {
      console.log('i am marking it won', grid)
      gameStatus.markWon()
      clearSession(session.category)
    } else if (guessTracker.wrongGuesses >= GAME_CONFIGS.MAX_WRONG_GUESSES) {
      revealAll();
      gameStatus.markLost()
      clearSession(session.category)
    }
  }, [grid, guessTracker.wrongGuesses, gameStatus, revealAll])

  const pause = () => {
    gameStatus.pause()
  }

  const playAgain = useCallback(() => {
    if (session.category) startGame(session.category)
  }, [session.category, startGame])

  const quit = useCallback(() => {
    clearSession();
    guessTracker.reset();
    gameStatus.reset();
  }, [clearSession, guessTracker, gameStatus])

  return {
    category: session.category,
    phrase: session.phrase,
    grid,
    guessedLetters: guessTracker.guessedLetters,
    wrongGuesses: guessTracker.wrongGuesses,
    remainingLives: guessTracker.remainingLives,
    status: gameStatus.status,
    pause,
    startGame,
    guessLetter,
    playAgain,
    quit
  }
}

export default useGameLogic