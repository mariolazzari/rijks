import { ArtObject } from "./ArtObject";
import { CountFacets } from "../types/CountFacets";

export interface CollectionResponse {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
}
