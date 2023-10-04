import ArtObject from "./ArtObject";
import Color from "./Color";
import ColorNormalization from "./ColorNormalization";
import Culture from "./Culture";

interface ArtObjectDetails extends ArtObject {
  priref: string;
  language: Culture;
  copyrightHolder?: string;
  colors: Color[];
  colorsWithNormalization: ColorNormalization[];
  normalizedColors: Color[];
  normalized32Colors: Color[];
  materialsThesaurus: string[];
  techniquesThesaurus: string[];
  productionPlacesThesaurus: string[];
  titles: string[];
  description: string;
  labelText?: string;
  objectTypes: string[];
  objectCollection: string[];
  makers: string[];
}

export default ArtObjectDetails;
