import ArtObject from "./ArtObject";

type CollectionResponse = {
  elapsedMilliseconds: number;
  count: number;
  artObjects: ArtObject[];
};

export default CollectionResponse;
