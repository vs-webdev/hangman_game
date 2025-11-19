export const createLetterGrid = (phrase) => {
  if (!phrase) return []
  return phrase.split(' ').map(word =>
    word.split('').map(char => ({
      letter: char.toLowerCase(),
      revealed: false,
      isSpace: false,
    }))
  )
}

export const isGameWon = (grid) => {
  return grid.every(word =>
    word.every(tile => tile.revealed || tile.isSpace)
  )
}