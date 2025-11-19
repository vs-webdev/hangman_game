import { useCallback, useEffect, useState } from "react"

const useLetterGrid = (letterGrid) => {
  const [grid, setGrid] = useState(letterGrid)

  useEffect(() => {
    setGrid(letterGrid)
  }, [letterGrid])

  const revealLetter = useCallback(letter => {
    setGrid(currentGrid =>
      currentGrid.map(word =>
        word.map(tile =>
          tile.letter === letter.toLowerCase()
          ? {...tile, revealed: true}
          : tile
        )
      )
    )
  }, [])

  const revealAll = useCallback(() => {
    setGrid(currentGrid =>
      currentGrid.map(word =>
        word.map(tile => ({...tile, revealed: true}))
      )
    )
  }, [])

  return {grid, revealLetter, revealAll}
}

export default useLetterGrid