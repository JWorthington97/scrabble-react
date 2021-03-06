import "./App.css";
import { useState, useEffect, createContext } from "react";
import { generateBoard } from "./utils/generateBoard";
import RenderBoard from "./components/Board/RenderBoard";
import RenderHand from "./components/Hand/RenderHand";
import bagJSON from "./utils/bagNoBlanks.json";
import submitAction from "./utils/submitAction";
import { RestrictedPositionProps, TileProps } from "./Types";
import determineRestrictedPosition from "./utils/determineRestrictedPosition";

export const BoardContext = createContext<TileProps[][]>([]);
export const HandContext = createContext<string[]>([]);
export const BagContext = createContext({});

const testBoard = [
  [
      {
          "letter": "",
          "x": 0,
          "y": 0,
          "id": "0,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 0,
          "id": "1,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 0,
          "id": "2,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 0,
          "id": "3,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 0,
          "id": "4,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 0,
          "id": "5,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 0,
          "id": "6,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 0,
          "id": "7,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 0,
          "id": "8,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 0,
          "id": "9,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 0,
          "id": "10,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 0,
          "id": "11,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 0,
          "id": "12,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 0,
          "id": "13,0",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 0,
          "id": "14,0",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 1,
          "id": "0,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 1,
          "id": "1,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 1,
          "id": "2,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 1,
          "id": "3,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 1,
          "id": "4,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 1,
          "id": "5,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 1,
          "id": "6,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 1,
          "id": "7,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 1,
          "id": "8,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 1,
          "id": "9,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 1,
          "id": "10,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 1,
          "id": "11,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 1,
          "id": "12,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 1,
          "id": "13,1",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 1,
          "id": "14,1",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 2,
          "id": "0,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 2,
          "id": "1,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 2,
          "id": "2,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 2,
          "id": "3,2",
          "locked": false
      },
      {
          "letter": "S",
          "x": 4,
          "y": 2,
          "id": "4,2",
          "locked": true
      },
      {
          "letter": "",
          "x": 5,
          "y": 2,
          "id": "5,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 2,
          "id": "6,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 2,
          "id": "7,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 2,
          "id": "8,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 2,
          "id": "9,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 2,
          "id": "10,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 2,
          "id": "11,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 2,
          "id": "12,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 2,
          "id": "13,2",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 2,
          "id": "14,2",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 3,
          "id": "0,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 3,
          "id": "1,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 3,
          "id": "2,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 3,
          "id": "3,3",
          "locked": false
      },
      {
          "letter": "T",
          "x": 4,
          "y": 3,
          "id": "4,3",
          "locked": true
      },
      {
          "letter": "",
          "x": 5,
          "y": 3,
          "id": "5,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 3,
          "id": "6,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 3,
          "id": "7,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 3,
          "id": "8,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 3,
          "id": "9,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 3,
          "id": "10,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 3,
          "id": "11,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 3,
          "id": "12,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 3,
          "id": "13,3",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 3,
          "id": "14,3",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 4,
          "id": "0,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 4,
          "id": "1,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 4,
          "id": "2,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 4,
          "id": "3,4",
          "locked": false
      },
      {
          "letter": "A",
          "x": 4,
          "y": 4,
          "id": "4,4",
          "locked": true
      },
      {
          "letter": "",
          "x": 5,
          "y": 4,
          "id": "5,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 4,
          "id": "6,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 4,
          "id": "7,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 4,
          "id": "8,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 4,
          "id": "9,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 4,
          "id": "10,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 4,
          "id": "11,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 4,
          "id": "12,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 4,
          "id": "13,4",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 4,
          "id": "14,4",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 5,
          "id": "0,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 5,
          "id": "1,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 5,
          "id": "2,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 5,
          "id": "3,5",
          "locked": false
      },
      {
          "letter": "R",
          "x": 4,
          "y": 5,
          "id": "4,5",
          "locked": true
      },
      {
          "letter": "E",
          "x": 5,
          "y": 5,
          "id": "5,5",
          "locked": true
      },
      {
          "letter": "D",
          "x": 6,
          "y": 5,
          "id": "6,5",
          "locked": true
      },
      {
          "letter": "",
          "x": 7,
          "y": 5,
          "id": "7,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 5,
          "id": "8,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 5,
          "id": "9,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 5,
          "id": "10,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 5,
          "id": "11,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 5,
          "id": "12,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 5,
          "id": "13,5",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 5,
          "id": "14,5",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 6,
          "id": "0,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 6,
          "id": "1,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 6,
          "id": "2,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 6,
          "id": "3,6",
          "locked": false
      },
      {
          "letter": "S",
          "x": 4,
          "y": 6,
          "id": "4,6",
          "locked": true
      },
      {
          "letter": "",
          "x": 5,
          "y": 6,
          "id": "5,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 6,
          "id": "6,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 6,
          "id": "7,6",
          "locked": false
      },
      {
          "letter": "S",
          "x": 8,
          "y": 6,
          "id": "8,6",
          "locked": true
      },
      {
          "letter": "",
          "x": 9,
          "y": 6,
          "id": "9,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 6,
          "id": "10,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 6,
          "id": "11,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 6,
          "id": "12,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 6,
          "id": "13,6",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 6,
          "id": "14,6",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 7,
          "id": "0,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 7,
          "id": "1,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 7,
          "id": "2,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 7,
          "id": "3,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 7,
          "id": "4,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 7,
          "id": "5,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 7,
          "id": "6,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 7,
          "id": "7,7",
          "locked": false
      },
      {
          "letter": "P",
          "x": 8,
          "y": 7,
          "id": "8,7",
          "locked": true
      },
      {
          "letter": "",
          "x": 9,
          "y": 7,
          "id": "9,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 7,
          "id": "10,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 7,
          "id": "11,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 7,
          "id": "12,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 7,
          "id": "13,7",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 7,
          "id": "14,7",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 8,
          "id": "0,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 8,
          "id": "1,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 8,
          "id": "2,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 8,
          "id": "3,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 8,
          "id": "4,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 8,
          "id": "5,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 8,
          "id": "6,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 8,
          "id": "7,8",
          "locked": false
      },
      {
          "letter": "O",
          "x": 8,
          "y": 8,
          "id": "8,8",
          "locked": true
      },
      {
          "letter": "",
          "x": 9,
          "y": 8,
          "id": "9,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 8,
          "id": "10,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 8,
          "id": "11,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 8,
          "id": "12,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 8,
          "id": "13,8",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 8,
          "id": "14,8",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 9,
          "id": "0,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 9,
          "id": "1,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 9,
          "id": "2,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 9,
          "id": "3,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 9,
          "id": "4,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 9,
          "id": "5,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 9,
          "id": "6,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 9,
          "id": "7,9",
          "locked": false
      },
      {
          "letter": "O",
          "x": 8,
          "y": 9,
          "id": "8,9",
          "locked": true
      },
      {
          "letter": "",
          "x": 9,
          "y": 9,
          "id": "9,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 9,
          "id": "10,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 9,
          "id": "11,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 9,
          "id": "12,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 9,
          "id": "13,9",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 9,
          "id": "14,9",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 10,
          "id": "0,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 10,
          "id": "1,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 10,
          "id": "2,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 10,
          "id": "3,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 10,
          "id": "4,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 10,
          "id": "5,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 10,
          "id": "6,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 10,
          "id": "7,10",
          "locked": false
      },
      {
          "letter": "N",
          "x": 8,
          "y": 10,
          "id": "8,10",
          "locked": true
      },
      {
          "letter": "",
          "x": 9,
          "y": 10,
          "id": "9,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 10,
          "id": "10,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 10,
          "id": "11,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 10,
          "id": "12,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 10,
          "id": "13,10",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 10,
          "id": "14,10",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 11,
          "id": "0,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 11,
          "id": "1,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 11,
          "id": "2,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 11,
          "id": "3,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 11,
          "id": "4,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 11,
          "id": "5,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 11,
          "id": "6,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 11,
          "id": "7,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 11,
          "id": "8,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 11,
          "id": "9,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 11,
          "id": "10,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 11,
          "id": "11,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 11,
          "id": "12,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 11,
          "id": "13,11",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 11,
          "id": "14,11",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 12,
          "id": "0,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 12,
          "id": "1,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 12,
          "id": "2,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 12,
          "id": "3,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 12,
          "id": "4,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 12,
          "id": "5,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 12,
          "id": "6,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 12,
          "id": "7,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 12,
          "id": "8,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 12,
          "id": "9,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 12,
          "id": "10,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 12,
          "id": "11,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 12,
          "id": "12,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 12,
          "id": "13,12",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 12,
          "id": "14,12",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 13,
          "id": "0,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 13,
          "id": "1,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 13,
          "id": "2,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 13,
          "id": "3,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 13,
          "id": "4,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 13,
          "id": "5,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 13,
          "id": "6,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 13,
          "id": "7,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 13,
          "id": "8,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 13,
          "id": "9,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 13,
          "id": "10,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 13,
          "id": "11,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 13,
          "id": "12,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 13,
          "id": "13,13",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 13,
          "id": "14,13",
          "locked": false
      }
  ],
  [
      {
          "letter": "",
          "x": 0,
          "y": 14,
          "id": "0,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 1,
          "y": 14,
          "id": "1,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 2,
          "y": 14,
          "id": "2,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 3,
          "y": 14,
          "id": "3,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 4,
          "y": 14,
          "id": "4,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 5,
          "y": 14,
          "id": "5,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 6,
          "y": 14,
          "id": "6,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 7,
          "y": 14,
          "id": "7,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 8,
          "y": 14,
          "id": "8,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 9,
          "y": 14,
          "id": "9,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 10,
          "y": 14,
          "id": "10,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 11,
          "y": 14,
          "id": "11,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 12,
          "y": 14,
          "id": "12,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 13,
          "y": 14,
          "id": "13,14",
          "locked": false
      },
      {
          "letter": "",
          "x": 14,
          "y": 14,
          "id": "14,14",
          "locked": false
      }
  ]
]

// Add some tests

function App() {
  // const [board, setBoard] = useState(generateBoard);
  const [board, setBoard] = useState(testBoard);
  const [hand, setHand] = useState("SPOONSOUPRED".split("")); // arr of object of hands
  const [chosenTile, setChosenTile] = useState("");
  const [bag, setBag] = useState(bagJSON);
  const [tilesPlaced, setTilesPlaced] = useState<TileProps[]>([]);
  const [restrictedPosition, setRestrictedPosition] =
    useState<RestrictedPositionProps>({ x: null, y: null });
  
    let dictionaryTxt: string[] = []
  fetch("./utils/dictionary.txt")
  .then((response) => response.text())
  .then((text) => dictionaryTxt = text.split("/\r?\n/")

//   console.log(dictionaryTxt[1])
    // const dictionary = dictionaryTxt.reduce((dictionary, word) => dictionary[word] = null; return dictionary)

//     var dictionary = dictionaryTxt.reduce(function(obj, itm) {
//         obj[word] = false;

//         return obj;
// }, {});

  useEffect(
    () => determineRestrictedPosition({ tilesPlaced, setRestrictedPosition }),
    [tilesPlaced.length]
  );

  return (
    <>
      <BoardContext.Provider value={board}>
        <HandContext.Provider value={hand}>
          <div className="container">
            <RenderBoard
              setBoard={setBoard}
              chosenTile={chosenTile}
              setChosenTile={setChosenTile}
              setHand={setHand}
              tilesPlaced={tilesPlaced}
              setTilesPlaced={setTilesPlaced}
              restrictedPosition={restrictedPosition}
            />
            <div className="RHS">
              <div className="score">Scores</div>
              <div>
                <div className="hand">
                  <RenderHand setChosenTile={setChosenTile} />
                </div>
                <div className="handActions">
                  <button
                    onClick={() =>
                      submitAction({ setTilesPlaced, setRestrictedPosition, tilesPlaced, board})
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </HandContext.Provider>
      </BoardContext.Provider>
    </>
  );
}

export default App;
