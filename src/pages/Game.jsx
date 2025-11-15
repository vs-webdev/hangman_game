import Categories from '../components/Categories'
import PlayArea from '../components/PlayArea'
import { useGame } from '../context/GameContext'

const Game = () => {
  const {selectedCategory} = useGame()
  return (
    <div className='w-full'>
      {
        !selectedCategory
        ? <Categories />
        : <PlayArea />
      }
    </div>
  )
}

export default Game
