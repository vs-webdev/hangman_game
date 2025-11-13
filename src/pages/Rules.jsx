import { useNavigate } from "react-router-dom"
import backIcon from "../assets/images/icon-back.svg"
import ActionBUtton from "../components/ActionButton"

const Rules = () => {
  const navigate = useNavigate()
  const rules = [
    {serial: 1, heading: 'Choose a category', para: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."},
    {serial: 2, heading: "Guess Letters", para: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses."},
    {serial: 3, heading: "Win or Lose", para: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."}
  ]

  return (
    <div className="w-full">
      <div className="flex items-center w-full mb-12">
        <ActionBUtton icon={backIcon} func={() => navigate(-1)} />
        <span className='text-9xl mx-auto text-transparent bg-clip-text bg-[linear-gradient(180deg,#67b6ff_16.42%,#fff)]'>How to Play</span>
      </div>

      {/* Rules */}
      <ul className="flex gap-8">
        {
          rules.map(rule => (
            <li key={rule.serial}
              className="bg-neutral-100 flex-1 text-neutral-800 p-8 rounded-[2rem] hover:scale-102 transition-all ease-in-out"
            >
              <span className="text-7xl text-[#2463ff]">0{rule.serial}</span>
              <h1 className="text-5xl my-6 uppercase text-[#261676]">{rule.heading}</h1>
              <p className="text-3xl text-[#887dc0]">{rule.para}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Rules
