import { useState } from 'react';
import './App.css';

function App() {
  

  const generateBoard = () => {
    let arr = []
    for (let y = 0; y < 15; y++) {
      let runArr = []
      for (let i = 0; i < 15; i++) {
        runArr.push({
        letter: "",
        y: y,
        x:i,
        id: i.toString() + "," + y.toString()
      })
      }
      arr.push(runArr)
    }
    return arr
  }

  const [board, setBoard] = useState(generateBoard)
  
  return (
    <div className="board">
      {board.map((ar) => ( 
        ar.map((el) => (
          <div key={el.id} className="tile" onClick={() => console.log(el.id)}>{el.id}</div>
        ))
      ))}
    </div>
  );
}

export default App;

// click the tile in hand and that will set a state (chosen tile)
// on click for a space on the board sets that space to the chosen tile