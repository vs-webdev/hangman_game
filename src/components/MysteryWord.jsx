
const MysteryWord = ({grid, status}) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-12 mb-16">
      {
        grid?.map((word, wordIndex) => {
          const previousLettersCount = grid.slice(0, wordIndex)
            .reduce((total, w) => total + w.length, 0)
          return (
          <div key={wordIndex} className="flex gap-4">{
            word.map((tile, tileIndex) => {
              const globalIndex = previousLettersCount + tileIndex;
              const delay = globalIndex * 0.1
              return (
                <div 
                  key={tileIndex}
                  className={`text-6xl uppercase border px-8 py-4 rounded-3xl ${status === 'won' ? 'bouncing-animation' : ''}`}
                  style={{animationDelay: `${delay}s`}}
                >
                  {tile.revealed ? tile.letter : (<div className="">0</div>)}
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
