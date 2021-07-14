import { useContext } from "react";
import { BoardContext, HandContext } from "../../App";
import { RenderHandProps } from "../../Types";

export default function RenderHand({
  setChosenTile,
}: RenderHandProps): JSX.Element {
  let hand = useContext(HandContext);
  return (
    <>
      {hand.map((char) => (
        <div className="handTile" onClick={() => setChosenTile(char)}>
          {char}
        </div>
      ))}
    </>
  );
}

// chosenTile, setChosenTile
// onClick for hand setChosenTile = tile.letter
// onClick for board:
//     if boardTile.letter = "" && chosenTile !== ""
