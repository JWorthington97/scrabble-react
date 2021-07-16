import { TileProps } from "../Types"
export default function getWordsToScore(joinedWords: TileProps[][]) {
    return joinedWords
    .filter((word) => !word
        .every((tile) => tile.locked))
    .map((tiles)=> tiles
        .reduce((word, letter) => word += letter.letter ,""))
}