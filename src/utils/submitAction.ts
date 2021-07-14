import ReplenishHand from "../components/Hand/ReplenishHand";
import { SubmitActionProps } from "../Types";

export default function submitAction({
  setTilesPlaced,
  setRestrictedPosition,
}: SubmitActionProps) {
  // CheckHand()
  //ReplenishHand()
  // LockBoard()
  // add logic for locked when implemented
  // after all checks and words are correct etc
  setTilesPlaced([]);
  setRestrictedPosition({ x: null, y: null });
  return;
}
