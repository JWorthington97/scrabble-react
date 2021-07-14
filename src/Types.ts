export interface TileProps {
    letter: string;
    id: string;
    x: number;
    y: number;
    locked: boolean;
  }

export interface HandleTileChangeProps {
    tile: TileProps,
    setBoard(tile: TileProps[][]): void
  }

export interface RenderBoardProps {
  chosenTile:string
  setBoard(tile: TileProps[][]):void
  setChosenTile(chosenTile:string):void,
  setHand(chosenHand: string[]): void,
  tilesPlaced: TileProps[],
  setTilesPlaced(tilesPlaced:TileProps[]):void
}

export interface RenderHandProps {
  setChosenTile(chosenTile:string):void
}

export interface SubmitActionProps {
  setTilesPlaced(numTilesPlaced:TileProps[]):void
}

export interface RestrictedPositionProps {
  x: number | null,
  y: number | null
}