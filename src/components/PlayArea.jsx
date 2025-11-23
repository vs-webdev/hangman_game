import menuIcon from "../assets/images/icon-menu.svg"
import heartIcon from "../assets/images/icon-heart.svg"
import ActionBUtton from './ActionButton'
import VirtualKeyboard from "./VirtualKeyboard"
import MysteryWord from "./MysteryWord"
import { useGame } from '../context/GameContext'
import { GAME_CONFIGS } from "../shared/constants"

const PlayArea = () => {
  const {category, guessLetter, grid, guessedLetters, status, remainingLives} = useGame()
  const lifePercentage = Math.max(0, (remainingLives / GAME_CONFIGS.MAX_WRONG_GUESSES) * 100);

  return (
    <div className='min-w-300 w-full'>
      <header className='flex items-center justify-between w-full mb-20'>
        <div className='flex items-center gap-8'>
          <ActionBUtton icon={menuIcon}/>
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
    </div>
  )
}

export default PlayArea
