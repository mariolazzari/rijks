import Tile from "./Tile";

type Level = {
  name: string;
  width: number;
  height: number;
  tiles: Tile[];
};

export default Level;
