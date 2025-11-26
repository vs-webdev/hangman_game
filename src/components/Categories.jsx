import ActionBUtton from "./ActionButton"
import backIcon from "../assets/images/icon-back.svg"
import { useNavigate } from "react-router-dom"
import data from "../data.json"
import { useGame } from "../context/GameContext"

const Categories = () => {
  const navigate = useNavigate()
  const categories = Object.keys(data.categories)
  const {startGame} = useGame()

  const handleSelectCategory = (category) => {
    startGame(category)
  }

  return (
    <div className="w-full p-8">
      <header className="flex items-center justify-between text-5xl sm:text-8xl w-full mb-20">
        <ActionBUtton icon={backIcon} func={() => navigate(-1)} />
        <span className="sm:mx-auto">
          Pick a Category
        </span>
      </header>

      <div className="w-full">
        <ul
          className="grid gap-8 sm:grid-rows-2 sm:grid-cols-3"
        >{
          categories.map((category, index) => (
            <li key={index}
              className="w-full sm:px-18 py-4 sm:py-16 rounded-2xl sm:rounded-4xl flex items-center justify-center bg-[#2463FF] shadow-[inset_0_.3rem_0_.3rem_#3c74ff,_0_.15rem_0_.3rem_#140e66] hover:scale-102 hover:bg-[#4d81ff] cursor-pointer"
              onClick={() => handleSelectCategory(category)}
            >
              <span className="text-3xl sm:text-6xl uppercase">{category}</span>
            </li>
          ))
        }</ul>
      </div>
    </div>
  )
}

export default Categories
