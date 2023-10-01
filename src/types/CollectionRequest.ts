import Culture from "./Culture";
import Format from "./Format";
import Sort from "./Sort";

interface ICollectionRequest {
  key: string;
  format: Format;
  culture: Culture;
  page: number;
  perPage: number;
  searchTerm: string;
  involvedMaker: string;
  type: string;
  material: string;
  technique: string;
  period: string;
  hex: string;
  imageOnly: boolean;
  topPieces: boolean;
  sort: Sort;
}

type CollectionRequest = Readonly<ICollectionRequest>;

export { ICollectionRequest, CollectionRequest };
export default CollectionRequest;
