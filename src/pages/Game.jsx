import Categories from '../components/Categories'
import PlayArea from '../components/PlayArea'
import { useGame } from '../context/GameContext'

const Game = () => {
  const {category} = useGame()
  
  return (
    <div className='w-full'>
      {
        !category
        ? <Categories />
        : <PlayArea />
      }
    </div>
  )
}

export default Game
