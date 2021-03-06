import { useContext } from "react";
import { HandleTileChangeProps, TileProps } from "../../Types";
import { BoardContext, HandContext } from "../../App";
import { RenderBoardProps } from "../../Types";
import determineRestrictedPosition from "../../utils/determineRestrictedPosition";

export default function RenderBoard({
  chosenTile,
  setBoard,
  setChosenTile,
  setHand,
  tilesPlaced,
  setTilesPlaced,
  restrictedPosition,
}: RenderBoardProps): JSX.Element {
  const board = useContext(BoardContext);
  const hand = useContext(HandContext);

  const handleTileChange = (tile: TileProps) => {
    let tiles = [...board];
    if (chosenTile !== "") {
      // making sure a tile has been clicked from the hand
      if (tiles[tile.y][tile.x].letter === "") {
        if (
          (restrictedPosition.x === null && restrictedPosition.y === null) ||
          tile.y === restrictedPosition.y ||
          tile.x === restrictedPosition.x
        ) {
          // preventing a tile overwrite
          let boardTile = { ...tiles[tile.y][tile.x], letter: chosenTile };
          tiles[tile.y][tile.x] = boardTile;
          setBoard(tiles);
          setChosenTile("");
          setHand([
            ...hand.filter(
              (letter, index) => index != hand.indexOf(chosenTile)
            ),
          ]);
          setTilesPlaced([...tilesPlaced, tile]);
        } else {
          window.alert(
            "Invalid tile placement. Please place tiles in the corresponding row / column"
          );
        }
      }
    }
  };

  return (
    <div className="board">
      {board.map((tileRow) =>
        tileRow.map((tile) => (
          <div
            key={tile.id}
            className="tile"
            onClick={() => handleTileChange(tile)}
          >
            {tile.letter}
          </div>
        ))
      )}
    </div>
  );
}
