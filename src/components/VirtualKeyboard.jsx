
const VirtualKeyboard = ({guessLetter, guessedLetters}) => {
  const virtualKeyboard = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
  
  return (
    <ul className="grid grid-rows-3 grid-cols-9 gap-3 sm:gap-6 w-full">
      {
        virtualKeyboard.map((letter, index) => {
          const isDisabled = guessedLetters.has(letter)
          return (
            <li key={index} className="w-full">
              <button
                className={`py-2 sm:py-4 w-full text-3xl sm:text-4xl uppercase rounded-lg sm:rounded-2xl transition-colors duration-200
                  ${
                    isDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-default opacity-50'
                      : 'bg-[#ffffff] text-[#261676] hover:bg-[#2463ff] hover:text-[#ffffff] cursor-pointer'
                  }
                `}
                onClick={() => guessLetter(letter)}
                disabled={isDisabled}
              >
                {letter}
              </button>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default VirtualKeyboard


