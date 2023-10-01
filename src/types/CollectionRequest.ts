import Culture from "./Culture";
import Format from "./Format";

interface ICollectionRequest {
  key: string;
  format: Format;
  culture: Culture;
  page: number;
  perPage: number;
  searchTerm: string;
}

type CollectionRequest = Readonly<ICollectionRequest>;

export { ICollectionRequest, CollectionRequest };
export default CollectionRequest;
