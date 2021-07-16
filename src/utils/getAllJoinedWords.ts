import { useContext } from "react";
import { BoardContext } from "../App";
import { TileProps, IWordPos } from "../Types";
import determineRestrictedPosition from "./determineRestrictedPosition";
import HBaseWord from "./HBaseWord";
import VBaseWord from './VBaseWord'

export default function GetAllJoinedWords(tilesPlaced: TileProps[], board: TileProps[][]) {
  const inputWordPosition = { 
    start: {x: 14, y: 14},
    end:{x: 0, y: 0} 
  };

  // let joinedWords: TileProps[][] = []

  const joinedWords = HBaseWord(inputWordPosition, tilesPlaced, board)
  // inputWordPosition.start.x ===  inputWordPosition.end.x ?
  //   joinedWords = HBaseWord(inputWordPosition, tilesPlaced, board) :
  //   joinedWords = VBaseWord(inputWordPosition, tilesPlaced, board)
 




 

 

  
 
  console.log(joinedWords)

 
  return joinedWords;
}

// Horizontal word
// 1. Start at leftmost placed tile
// 2. Look left until empty square (or out of bounds of array board)
// 3. Set start of word to final letter x,y before empty square
// 4. Look right until empty square (or out of bounds of array board)
// 5. Set end of word to final letter x,y before empty square         => get HBaseWord()
// 6. For each character in base word:        
  // 7. Go up to find start of word
  // 8. Go down to find end of word
  // 9. Return that word in an array                                  => getHBaseStemWords()
