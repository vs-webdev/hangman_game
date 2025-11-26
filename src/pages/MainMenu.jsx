import logo from "../assets/images/logo.svg"
import play from "../assets/images/icon-play.svg"
import { useNavigate } from "react-router-dom"

const MainMenu = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-80 sm:w-[700px] px-8 sm:px-20 md:px-32 xl:px-48 pt-10 pb-10 mt-16 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-b from-[#344aba] to-[rgba(0,20,121,.83)] shadow-[inset_0_.6rem_0_.3rem_#3c74ff,_0_.3rem_0_.5rem_#140e66]">
        <div className="absolute top-[-50px] sm:top-[-100px]">
          <img src={logo} alt="Hangman Logo" className="w-52 md:w-auto" />
        </div>
        <button
          className="w-36 h-36 sm:w-40 sm:w-40 md:w-48 md:h-48 my-20 sm:my-14 md:my-20 flex items-center justify-center bg-[linear-gradient(180deg,#fe71fe_16.42%,#7199ff)] hover:bg-[linear-gradient(0deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,.25)),linear-gradient(180deg,#fe71fe_16.42%,#7199ff)] hover:scale-102 transition-all ease-in-out shadow-[inset_0_-.8rem_0_.6rem_#9d2df5,_0_.3rem_0_.5rem_#243041] rounded-full cursor-pointer"
          onClick={() => navigate("/game")}
        >
          <img src={play} alt="Play" className="w-12 sm:w-18"/>
        </button>
        <button
          className="w-full sm:w-auto px-15 sm:px-20 py-3 sm:py-4 rounded-full text-3xl tracking-wide sm:text-3xl bg-[#2463ff] hover:bg-[#4d81ff] hover:scale-102 transition-all ease-in-out shadow-[inset_0_.3rem_0_.2rem_#3c74ff,_0_.2rem_0_.4rem_#140e66] cursor-pointer"
          onClick={() => navigate("/rules")}
        >
          HOW TO PLAY
        </button>
      </div>
    </div>
  )
}

export default MainMenu
