interface ICollectionImageRequest {
  objectNumber: string;
}

type CollectionImageRequest = Readonly<ICollectionImageRequest>;

export { ICollectionImageRequest, CollectionImageRequest };
export default CollectionImageRequest;
