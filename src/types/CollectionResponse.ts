import { ArtObject } from "./ArtObject";
import { CountFacets } from "./CountFacets";
import { Facet } from "./Facet";

export type CollectionResponse = {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
  facets: Facet[];
};
