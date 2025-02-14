import { ArtObjectPage } from "./ArtObjectPage";
import { ArtObjectDetails } from "./ArtObjectDetails";

export type CollectionDetailsResponse = {
  elapsedMilliseconds: number;
  artObject: ArtObjectDetails;
  artObjectPage: ArtObjectPage;
};
