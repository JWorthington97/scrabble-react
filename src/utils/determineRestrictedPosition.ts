// call this inside handleTileChange
import {
  DetermineRestrictedPositionProps,
  RestrictedPositionProps,
} from "../Types";

// checkIfPlacementRestricted
// restrictedPosition
export default function determineRestrictedPosition({
  tilesPlaced,
  setRestrictedPosition,
}: DetermineRestrictedPositionProps) {
  let pos: RestrictedPositionProps = {
    x: null,
    y: null,
  };

  if (tilesPlaced.length === 1) {
    pos.x = tilesPlaced[0].x;
    pos.y = tilesPlaced[0].y;
    setRestrictedPosition(pos);
  } else if (tilesPlaced.length === 2) {
    if (tilesPlaced[0].x === tilesPlaced[1].x) {
      pos.x = tilesPlaced[0].x;
      // pos.y = tilesPlaced[0].y
    } else if (tilesPlaced[0].y === tilesPlaced[1].y) {
      pos.y = tilesPlaced[0].y;
      // pos.x = tilesPlaced[0].x
    }
    setRestrictedPosition(pos);
  }
}

// useState of

// if couitner = 2
// setrescitre either x or y to the tile x or tile y
