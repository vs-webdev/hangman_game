import { useCallback, useState } from "react"
import { GAME_STATUS } from "../shared/constants"

const useGameStatus = () => {
  const [status, setStatus] = useState(GAME_STATUS.IDLE)

  return {
    status,
    startPlaying: useCallback(() => setStatus(GAME_STATUS.PLAYING), []),
    markWon: useCallback(() => setStatus(GAME_STATUS.WON), []),
    markLost: useCallback(() => setStatus(GAME_STATUS.LOST), []),
    rest: useCallback(() => setStatus(GAME_STATUS.IDLE), []),
  }
}

export default useGameStatus