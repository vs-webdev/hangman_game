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
    <div className='sm:min-w-300 w-full min-h-screen flex flex-col p-4 py-8'>
      <header className='flex items-center justify-between w-full mb-15 sm:mb-20'>
        <div className='flex items-center gap-4 sm:gap-12'>
          <ActionButton icon={menuIcon} func={() => showModal()}/>
          <span className='text-3xl sm:text-8xl'>{category}</span>
        </div>

        {/** Lives */}
        <div className="flex items-center gap-4 sm:gap-12 h-full">
          <div className="flex items-center justify-start w-20 sm:w-60 h-4 sm:h-7 bg-neutral-100 rounded-full border-4 sm:border-8">
            <div 
              className="h-full bg-[#261676] rounded-full transition-all duration-500 ease"
              style={{width: `${lifePercentage}%`}}
            ></div>
          </div>
          <img src={heartIcon} alt="Heart" className="w-[2rem] sm:w-14"/>
        </div>
      </header>

      <div className="flex-1 h-full flex flex-col py-8 sm:py-4 justify-between">
        <MysteryWord grid={grid} status={status}/>
        <VirtualKeyboard guessLetter={guessLetter} guessedLetters={guessedLetters} />
      </div>

      {isModalOpen && <GameStatusModal onCloseModal={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default PlayArea
