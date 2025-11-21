import menuIcon from "../assets/images/icon-menu.svg"
import heartIcon from "../assets/images/icon-heart.svg"
import ActionBUtton from './ActionButton'
import VirtualKeyboard from "./VirtualKeyboard"
import MysteryWord from "./MysteryWord"
import { useGame } from '../context/GameContext'

const PlayArea = () => {
  const {category, guessLetter, grid} = useGame()

  return (
    <div className='min-w-300 w-full'>
      <header className='flex items-center justify-between w-full mb-20'>
        <div className='flex items-center gap-8'>
          <ActionBUtton icon={menuIcon}/>
          <span className='text-8xl'>{category}</span>
        </div>

        <div className="flex items-center gap-8 h-full">
          <div className="w-45 h-6 bg-neutral-100 rounded-full"></div>
          <img src={heartIcon} alt="Heart" />
        </div>
      </header>

      <MysteryWord grid={grid} />
      <VirtualKeyboard guessLetter={guessLetter} />
    </div>
  )
}

export default PlayArea
