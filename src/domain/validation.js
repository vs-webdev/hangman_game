// Validates game paramters
export const ValidateGameCreation = (phrase, category, config) => {
  const errors = []

  if (!phrase || phrase.trim().length === 0) {
    errors.push('Phrase is required')
  }

  if (!category) {
    errors.push('Category is required')
  }

  if (!config) {
    errors.push('Valid config is required')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Validates letter input

export const validateLetter = (letter) => {
  if (typeof letter !== 'string' || letter.length !== 1) {
    return { isValid: false, error: 'Letter must be a single character' }
  }

  if (!/^[a-z]$/i.test(letter)) {
    return {isValid: false, error: 'Leter must be a-z'}
  }

  return { isValid: true}
}