import { useCallback, useState } from "react"
import { GAME_STATUS } from "../shared/constants"

const useGameStatus = () => {
  const [status, setStatus] = useState(GAME_STATUS.IDLE)

  return {
    status,
    startPlaying: useCallback(() => setStatus(GAME_STATUS.PLAYING), []),
    pause: useCallback(() => setStatus(GAME_STATUS.PAUSED), []),
    markWon: useCallback(() => setStatus(GAME_STATUS.WON), []),
    markLost: useCallback(() => setStatus(GAME_STATUS.LOST), []),
    reset: useCallback(() => setStatus(GAME_STATUS.IDLE), []),
  }
}

export default useGameStatus