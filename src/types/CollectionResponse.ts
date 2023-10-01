import ArtObject from "./ArtObject";

interface ICollectionResponse {
  elapsedMilliseconds: number;
  count: number;
  artObjects: ArtObject[];
}

type CollectionResponse = Readonly<ICollectionResponse>;

export { ICollectionResponse, CollectionResponse };
export default CollectionResponse;
