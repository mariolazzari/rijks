import { Culture } from "../types/Culture";
import { Format } from "../types/Format";
import { Sort } from "../types/Sort";

export interface CollectionRequest {
  searchTerm: string;
  page: number;
  perPage: number;
  format?: Format;
  culture?: Culture;
  involvedMaker?: string;
  type?: string;
  material?: string;
  technique?: string;
  period?: string;
  hex?: string;
  imageOnly?: boolean;
  topPieces?: boolean;
  sort?: Sort;
}
