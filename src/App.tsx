import "./App.css";
import { useState, createContext } from "react";
import { generateBoard } from './utils/generateBoard'
import RenderBoard from "./components/Board/RenderBoard";
import RenderHand from "./components/Hand/RenderHand";
import bagJSON from "./utils/bagNoBlanks.json"
import submitAction from "./utils/submitAction";
import { RestrictedPositionProps, TileProps } from "./Types";

export const BoardContext = createContext<TileProps[][]>([])
export const HandContext = createContext<string[]>([])
export const BagContext = createContext({})

function App() {
  const [board, setBoard] = useState(generateBoard);
  const [hand, setHand] = useState("FCDEFGSTARS".split("")) // arr of object of hands
  const [chosenTile, setChosenTile] = useState("")
  const [bag, setBag] = useState(bagJSON)
  const [tilesPlaced, setTilesPlaced] = useState<TileProps[]>([])
  const [restrictedPosition, setRestrictedPosition] = useState<RestrictedPositionProps>({x: null, y: null})
  
  console.log(tilesPlaced)

  return <>
  <BoardContext.Provider value={board}>
    <HandContext.Provider value = {hand}>
    <div className="container">
      <RenderBoard setBoard={setBoard} chosenTile={chosenTile} setChosenTile={setChosenTile} setHand={setHand} tilesPlaced={tilesPlaced} setTilesPlaced={setTilesPlaced}/>
      <div className="RHS">
        <div className="score">
          Scores
        </div>
        <div>
          <div className="hand">
            <RenderHand setChosenTile={setChosenTile}/>
          </div>
          <div className="handActions">
            <button onClick={() => submitAction({ setTilesPlaced })}>Submit</button>
          </div>
        </div>
      </div>
    </div>
    </HandContext.Provider>
  </BoardContext.Provider>
  </>
}

export default App;