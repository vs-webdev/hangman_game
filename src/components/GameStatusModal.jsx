import { useNavigate } from "react-router-dom"
import { useGame } from "../context/GameContext"

const GameStatusModal = ({onCloseModal}) => {
  const {quit, playAgain, status} = useGame()
  const navigate = useNavigate()

  const handleQuit = () => {
    quit();
    navigate("/")
  }

  const handleRestart = () => {
    playAgain()
    onCloseModal()
  }

  const modalConfigs = {
    won: {
      heading: 'You Won', 
      buttons: [
        {title: 'play again', func: handleRestart},
        {title: 'new category', func: () => quit()},
        {title: 'quit game', func: handleQuit}
      ]
    },
    lost: {
      heading: 'You Loss', 
      buttons: [
        {title: 'play again', func: handleRestart},
        {title: 'new category', func: () => quit()},
        {title: 'quit game', func: handleQuit}
      ]
    },
    paused: {
      heading: 'Paused', 
      buttons: [
        {title: 'continue', func: onCloseModal},
        {title: 'new category', func: () => quit()},
        {title: 'quit game', func: handleQuit}
      ]
    }
  }

  return (
    <div className="absolute flex items-center justify-center inset-0 bg-neutral-700/60">
      <div className="relative flex flex-col items-center justify-center px-15 sm:px-48 pt-25 sm:pt-30 pb-12 sm:pb-20 rounded-[3rem] bg-gradient-to-b from-[#344aba] to-[rgba(0,20,121,.83)] shadow-[inset_0_.3rem_0_.3rem_#3c74ff,_0_.2rem_0_.4rem_#140e66]">
        <h1 className="text-7xl sm:text-9xl capitalize absolute top-[-2rem] sm:top-[-4.5rem]">
          {modalConfigs[status].heading}
        </h1>
        <ul className="flex flex-col gap-10">
          {
            modalConfigs[status].buttons.map((button, index) => (
              <li key={index}>
                <button
                  className={
                    `px-15 sm:px-20 py-3 rounded-full text-2xl sm:text-3xl uppercase hover:scale-102 transition-all ease-in-out cursor-pointer
                    ${button.title === "quit game" 
                      ? "bg-[linear-gradient(180deg,#fe71fe_16.42%,#7199ff)] shadow-[inset_0_.3rem_0_.2rem_#c642fb,_0_.1rem_0_.3rem_#140e66] hover:bg-[linear-gradient(0deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,.25)),linear-gradient(180deg,#fe71fe_16.42%,#7199ff)]" 
                      : "bg-[#2463ff] shadow-[inset_0_.3rem_0_.2rem_#3c74ff,_0_.1rem_0_.3rem_#140e66] hover:bg-[#4d81ff]"}`
                  }
                  onClick={button.func}
                >
                  {button.title}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default GameStatusModal
