
const MysteryWord = ({grid}) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-12 mb-16">
      {
        grid?.map((word, wordIndex) => 
        <div key={wordIndex} className="flex gap-4">{
          word.map((tile, tileIndex) => (
            <div 
              key={tileIndex}
              className="text-6xl uppercase border px-8 py-4 rounded-3xl"
            >
              {tile.revealed ? tile.letter : (<div className="">0</div>)}
            </div>
          ))
        }
        </div>
        )
      }
    </div>
  )
}

export default MysteryWord
