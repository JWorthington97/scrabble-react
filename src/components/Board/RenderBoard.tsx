import { useContext } from "react";
import { HandleTileChangeProps } from "../../Types"
import { BoardContext } from "../../App";
import { RenderBoardProps } from "../../Types";




export default function RenderBoard({ setBoard }: RenderBoardProps):JSX.Element{
    const board = useContext(BoardContext)

  const handleTileChange = ({tile, setBoard}: HandleTileChangeProps) => {
    let tiles = [...board];
    let chosenTile = { ...tiles[tile.y][tile.x], letter: "test" }; // change to letter instead of test
    tiles[tile.y][tile.x] = chosenTile;
    setBoard(tiles);
  };

  return (
    <div className="board">
      {board.map((tileRow) =>
        tileRow.map((tile) => (
          <div key={tile.id} className="tile" onClick={() => handleTileChange({tile, setBoard})}>
            {tile.letter}
          </div>
        ))
      )}
    </div>
  );
}