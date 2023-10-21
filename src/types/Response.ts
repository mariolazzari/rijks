import { CollectionResponse } from "../interfaces/CollectionResponse";
import { CollectionDetailsResponse } from "../interfaces/CollectionDetailsResponse";
import { CollectionImageResponse } from "../interfaces/CollectionImageResponse";

export type Response =
  | CollectionResponse
  | CollectionDetailsResponse
  | CollectionImageResponse;
