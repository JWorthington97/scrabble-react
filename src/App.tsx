import "./App.css";
import { useState, createContext } from "react";
import { generateBoard } from './utils/generateBoard'
import {TileProps} from "./Types"
import RenderBoard from "./components/Board/RenderBoard";
import RenderHand from "./components/Hand/RenderHand";

export const BoardContext = createContext<TileProps[][]>([])

function App() {
  const [board, setBoard] = useState(generateBoard);

  return <>
  <BoardContext.Provider value={board}>
    <div className="container">
      <RenderBoard setBoard={setBoard}/>
      <div className="RHS">
        <div className="score">
          Scores
        </div>
        <div className="hand">
        <RenderHand />
        </div>
      </div>
    </div>
  </BoardContext.Provider>
  </>
}

export default App;