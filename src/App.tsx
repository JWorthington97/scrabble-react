import "./App.css";
import { useState, createContext } from "react";
import { generateBoard } from './utils/generateBoard'
import {TileProps} from "./Types"
import RenderBoard from "./components/Board/RenderBoard";
import RenderHand from "./components/Hand/RenderHand";
import bagJSON from "./utils/bagNoBlanks.json"

export const BoardContext = createContext<TileProps[][]>([])
export const HandContext = createContext<string[]>([])
export const BagContext = createContext({})

function App() {
  const [board, setBoard] = useState(generateBoard);
  const [hand, setHand] = useState("FCDEFG".split("")) // arr of object of hands
  const [chosenTile, setChosenTile] = useState("")
  const [bag, setBag] = useState(bagJSON)

  return <>
  <BoardContext.Provider value={board}>
    <HandContext.Provider value = {hand}>
    <div className="container">
      <RenderBoard setBoard={setBoard} chosenTile={chosenTile} setChosenTile={setChosenTile} setHand={setHand}/>
      <div className="RHS">
        <div className="score">
          Scores
        </div>
        <div className="hand">
        <RenderHand setChosenTile={setChosenTile}/>
        </div>
      </div>
    </div>
    </HandContext.Provider>
  </BoardContext.Provider>
  </>
}

export default App;