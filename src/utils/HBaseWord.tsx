import { TileProps, IWordPos } from "../Types"

export default function HBaseWord(inputWordPosition: IWordPos, tilesPlaced: TileProps[], board: TileProps[][]): TileProps[][] {
    let userWord = []
    let joinedWords: TileProps[][] = []

    // Assumption of horizontal
    inputWordPosition.start.y = tilesPlaced[0].y
    inputWordPosition.end.y = tilesPlaced[0].y
        
     // Get Start and End of H user placed word
    tilesPlaced.map((tile) => {
        if (tile.x < inputWordPosition.start.x) {
        inputWordPosition.start.x = tile.x
        }
        if (tile.x > inputWordPosition.end.x) {
        inputWordPosition.end.x = tile.x
        }
    })

     // find true start and end of horizontal word
    // true start - left
    while (inputWordPosition.start.x - 1 !== -1 && board[inputWordPosition.start.y][inputWordPosition.start.x - 1].letter !== "") {
        inputWordPosition.start.x -= 1
    }

    // true end - right
    while (inputWordPosition.end.x + 1 !== 15 && board[inputWordPosition.start.y][inputWordPosition.end.x + 1].letter !== "") {
        inputWordPosition.end.x += 1
    }

     // find all words stemming from H base characters
  for (let x = inputWordPosition.start.x; x <= inputWordPosition.end.x; x++) {
    // Get horizontal base word
    userWord.push(board[inputWordPosition.start.y][x])


    let stemWordPosition = {
      start: {x: x, y: inputWordPosition.start.y},
      end: {x: x, y: inputWordPosition.start.y}
    }

    while (stemWordPosition.start.y - 1 !== -1 && board[stemWordPosition.start.y - 1][stemWordPosition.start.x].letter !== "") {
      stemWordPosition.start.y -= 1
    }
  
    // true end - right
    while (stemWordPosition.end.y + 1 !== 15 && board[stemWordPosition.end.y + 1][stemWordPosition.end.x].letter !== "") {
      stemWordPosition.end.y += 1
    }
    let word = []
    for (let y = stemWordPosition.start.y; y <= stemWordPosition.end.y; y++) {
      word.push(board[y][x])
    }

    if (word.length > 1) {
       joinedWords.push(word)
    }

  }
  joinedWords.push(userWord)

    return joinedWords
}