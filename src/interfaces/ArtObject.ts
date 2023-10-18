import { Link } from "../types/Link";
import { Image } from "../types/Image";

export interface ArtObject {
  links: Link;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage?: Image;
  headerImage?: Image;
  productionPlaces: string[];
}
