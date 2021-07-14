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
  setHand(chosenHand: string[]): void
}

export interface RenderHandProps {
  setChosenTile(chosenTile:string):void
}