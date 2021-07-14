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
  setBoard(tile: TileProps[][]):void
}