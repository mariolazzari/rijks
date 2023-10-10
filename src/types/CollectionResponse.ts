import ArtObject from "./ArtObject";
import CountFacets from "./CountFacets";

type CollectionResponse = {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
};

export default CollectionResponse;
