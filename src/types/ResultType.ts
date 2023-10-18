import { CollectionResponse } from "../interfaces/CollectionResponse";
import { CollectionDetailsResponse } from "../interfaces/CollectionDetailsResponse";
import { CollectionImageResponse } from "../interfaces/CollectionImageResponse";

export type ResultType =
  | CollectionResponse
  | CollectionDetailsResponse
  | CollectionImageResponse;
