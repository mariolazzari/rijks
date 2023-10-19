import { ArtObject } from "./ArtObject";
import { CountFacets } from "../types/CountFacets";
import { Facet } from "../types/Facet";

export interface CollectionResponse {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
  facets: Facet[];
}
