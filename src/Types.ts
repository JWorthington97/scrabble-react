export interface TileProps {
    letter: string;
    id: string;
    x: number;
    y: number;
  }

export interface HandleTileChangeProps {
    tile: TileProps,
    setBoard(tile: TileProps[][]): void
  }