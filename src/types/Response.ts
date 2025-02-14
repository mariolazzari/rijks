import { CollectionResponse } from "./CollectionResponse";
import { CollectionDetailsResponse } from "./CollectionDetailsResponse";
import { CollectionImageResponse } from "./CollectionImageResponse";

export type Response =
  | CollectionResponse
  | CollectionDetailsResponse
  | CollectionImageResponse;
