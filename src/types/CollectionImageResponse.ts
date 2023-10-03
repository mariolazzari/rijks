import Level from "./Level";

interface ICollectionImageResponse {
  levels: Level[];
}

type CollectionImageResponse = Readonly<ICollectionImageResponse>;

export { ICollectionImageResponse, CollectionImageResponse };
export default CollectionImageResponse;
