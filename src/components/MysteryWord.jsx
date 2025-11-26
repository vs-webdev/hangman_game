
const MysteryWord = ({grid, status}) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-10 mb-16 sm:mb-24">
      {
        grid?.map((word, wordIndex) => {
          const previousLettersCount = grid.slice(0, wordIndex)
            .reduce((total, w) => total + w.length, 0)

          return (
          <div key={wordIndex} className="flex justify-center gap-3 sm:gap-6 flex-wrap">{
            word.map((tile, tileIndex) => {
              const globalIndex = previousLettersCount + tileIndex;
              const delay = globalIndex * 0.1;
              
              return (
                <div 
                  key={tileIndex}
                  className={`text-4xl sm:text-6xl w-6 sm:w-23 h-16 sm:h-26 flex items-center justify-center uppercase rounded-lg sm:rounded-4xl bg-[#2463ff] ${status === 'won' ? 'bouncing-animation' : ''} shadow-[inset_0_.2rem_0_.2rem_#3c74ff,_0_.1rem_0_.2rem_#140e66]`}
                  style={{animationDelay: `${delay}s`}}
                >
                  {tile.revealed ? tile.letter : ''}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default MysteryWord