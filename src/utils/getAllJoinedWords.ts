import { useContext } from "react";
import { BoardContext } from "../App";
import { TileProps } from "../Types";
import determineRestrictedPosition from "./determineRestrictedPosition";

export default function getAllJoinedWords(tilesPlaced: TileProps[]) {
  const InputWordPosition = { x: 0, y: 0 };

  // REPEAT FOR BOTH VERT AND HORIZONTAL
  // if (restrictedPosition.x !== null) {
  // do horizontal checks
  // go left to find start of word
  // go right to find end of word
  // i.e. where reach end of board (0's or 14's) or tile.letter = ""
  // for each character of word:
  // go up and down to find each joined word and add to a 2D array of tile objects
  // }
  // else {
  // do vertical checks
  // go up to find start of word
  // go down to find end of word
  // for each character of word:
  // go left and right to find each joined word and add to a 2D array of tile objects
  // }

  // return joinedWordsArray as a 2d array of tile objects

  // ANOTHER FUNCTION:
  // for each perpendicular word (+ user submitted word), check if a valid scrabble word
  // if all true,
  return;
}
