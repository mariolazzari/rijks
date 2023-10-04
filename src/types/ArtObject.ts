import Link from "./Link";
import Image from "./Image";

interface ArtObject {
  links: Link;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: Image;
  headerImage: Image;
  productionPlaces: string[];
}

export default ArtObject;
