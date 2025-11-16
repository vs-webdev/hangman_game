
const VirtualKeyboard = ({setGuessedKey}) => {
  const virtualKeyboard = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i))

  return (
    <ul className="grid grid-rows-3 grid-cols-9 gap-6 w-full">
      {
        virtualKeyboard.map((letter, index) => (
          <li key={index} className="w-full">
            <button
              className="py-4 w-full text-4xl text-[#261676] bg-[#ffffff] uppercase rounded-2xl hover:bg-[#2463ff] hover:text-[#ffffff] cursor-pointer"
              onClick={() => setGuessedKey(letter)}
            >
              {letter}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default VirtualKeyboard


