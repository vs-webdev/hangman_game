import ActionBUtton from "./ActionButton"
import backIcon from "../assets/images/icon-back.svg"
import { useNavigate } from "react-router-dom"
import { useGame } from "../context/GameContext"
import data from "../data.json"

const Categories = () => {
  const {setSelectedCategory} = useGame()
  const navigate = useNavigate()
  const categories = Object.keys(data.categories)

  return (
    <div className="w-full">
      <header className="flex items-center text-8xl w-full mb-20">
        <ActionBUtton icon={backIcon} func={() => navigate(-1)} />
        <span className="mx-auto">
          Pick a Category
        </span>
      </header>

      <div className="w-full">
        <ul
          className="grid gap-8 grid-rows-2 grid-cols-3"
        >{
          categories.map((category, index) => (
            <li key={index}
              className="px-18 py-16 flex items-center justify-center bg-[#2463FF] shadow-[inset_0_.3rem_0_.3rem_#3c74ff,_0_.15rem_0_.3rem_#140e66] rounded-4xl hover:scale-102 hover:bg-[#4d81ff] cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <span className="text-6xl uppercase">{category}</span>
            </li>
          ))
        }</ul>
      </div>
    </div>
  )
}

export default Categories
