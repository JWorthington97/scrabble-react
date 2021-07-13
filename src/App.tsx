import "./App.css";
import { useState, createContext } from "react";
import { generateBoard } from './utils/generateBoard'
import {TileProps, HandleTileChangeProps} from "./Types"

export const BoardContext = createContext<TileProps[][]>([])

function App() {
  const [board, setBoard] = useState(generateBoard);

  const handleTileChange = ({tile, setBoard}: HandleTileChangeProps) => {
    let tiles = [...board];
    let chosenTile = { ...tiles[tile.y][tile.x] };
    chosenTile.letter = "test"; //change to letter
    tiles[tile.y][tile.x] = chosenTile;
    setBoard(tiles);
  };

  return (
    <BoardContext.Provider value={board}>
    <div className="board">
      {board.map((tileRow) =>
        tileRow.map((tile) => (
          <div key={tile.id} className="tile" onClick={() => handleTileChange({tile, setBoard})}>
            {tile.letter}
          </div>
        ))
      )}
    </div>
    </BoardContext.Provider>
  );
}

export default App;

// click the tile in hand and that will set a state (chosen tile)
// on click for a space on the board sets that space to the chosen tile
