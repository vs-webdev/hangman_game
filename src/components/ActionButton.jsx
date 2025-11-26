
const ActionButton = ({icon, func}) => {
  return (
    <button
      className="w-12 sm:w-23 h-12 sm:h-23 rounded-full flex items-center justify-center bg-[linear-gradient(180deg,#fe71fe,#db80ff,#b68cff,#9294ff,#7199ff)] shadow-[inset_0_-.4rem_0_.4rem_rgba(157,45,245,.25)] hover:bg-[linear-gradient(0deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,.25)),linear-gradient(180deg,#fe71fe_16.42%,#7199ff)] cursor-pointer hover:scale-102 transition-all ease-in-out"
      onClick={func}
    >
      <img src={icon} alt="Back" className="w-5 sm:w-8" />
    </button>
  )
}

export default ActionButton
