export default function RenderHand(): JSX.Element {
    let array = 'ZZZZZZZZ'.split("")
    return <>
        {array.map((char) => (
            <div className="handTile">{char}</div>
        ))}
    </>
}

// chosenTile, setChosenTile
// onClick for hand setChosenTile = tile.letter
// onClick for board:
//     if boardTile.letter = "" && chosenTile !== ""