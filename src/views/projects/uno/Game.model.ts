import { Player } from "./Player.model";

export interface Game {
  winner: Player;
  looser: Player;
  points: number;
}
