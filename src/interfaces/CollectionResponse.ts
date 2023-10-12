import ArtObject from "../types/ArtObject";
import CountFacets from "../types/CountFacets";

interface CollectionResponse {
  elapsedMilliseconds: number;
  count: number;
  countFacets: CountFacets;
  artObjects: ArtObject[];
}

export default CollectionResponse;