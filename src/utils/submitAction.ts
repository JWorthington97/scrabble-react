import ReplenishHand from "../components/Hand/ReplenishHand";
import { SubmitActionProps } from "../Types";
import GetAllJoinedWords from "./getAllJoinedWords";
import { TileProps } from "../Types";
import getWordsToScore from "./getWordsToScore";

export default function submitAction({
  setTilesPlaced,
  setRestrictedPosition,
  tilesPlaced,
  board
}: SubmitActionProps) {
  // if tiles placed == [] prevent submit
  // CheckHand()
  //ReplenishHand()
  // LockBoard()
  // add logic for locked when implemented
  // after all checks and words are correct etc
  const joinedWords: TileProps[][] = GetAllJoinedWords(tilesPlaced, board)
  
  // get words to score
  //score words
  const wordsToScore = getWordsToScore(joinedWords)
  console.log(wordsToScore)
  
  setTilesPlaced([]);
  setRestrictedPosition({ x: null, y: null });
  return;
}

let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
)