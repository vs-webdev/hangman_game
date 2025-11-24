import menuIcon from "../assets/images/icon-menu.svg"
import heartIcon from "../assets/images/icon-heart.svg"
import ActionButton from './ActionButton'
import VirtualKeyboard from "./VirtualKeyboard"
import MysteryWord from "./MysteryWord"
import GameStatusModal from "./GameStatusModal"
import { useGame } from '../context/GameContext'
import { GAME_CONFIGS } from "../shared/constants"
import { useEffect, useState } from "react"

const PlayArea = () => {
  const {category, guessLetter, grid, guessedLetters, status, remainingLives, pause} = useGame()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const lifePercentage = Math.max(0, (remainingLives / GAME_CONFIGS.MAX_WRONG_GUESSES) * 100);

  const showModal = () => {
    setIsModalOpen(true)
    pause()
  }

  useEffect(() => {
  if (status === 'won' || status === 'lost' || status === 'paused') {
    setIsModalOpen(true)
  } else {
    setIsModalOpen(false)
  }
  }, [status])

  return (
    <div className='min-w-300 w-full'>
      <header className='flex items-center justify-between w-full mb-20'>
        <div className='flex items-center gap-8'>
          <ActionButton icon={menuIcon} func={() => showModal()}/>
          <span className='text-8xl'>{category}</span>
        </div>

        {/** Lives */}
        <div className="flex items-center gap-8 h-full">
          <div className="flex items-center justify-start w-60 h-7 bg-neutral-100 rounded-full border-8">
            <div 
              className="h-full bg-[#261676] rounded-full transition-all duration-500 ease"
              style={{width: `${lifePercentage}%`}}
            ></div>
          </div>
          <img src={heartIcon} alt="Heart" />
        </div>
      </header>

      <MysteryWord grid={grid} status={status}/>
      <VirtualKeyboard guessLetter={guessLetter} guessedLetters={guessedLetters} />

      {isModalOpen && <GameStatusModal onCloseModal={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default PlayArea
