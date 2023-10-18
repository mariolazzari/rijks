import { ArtObject } from "./ArtObject";
import { Color } from "../types/Color";
import { ColorNormalization } from "../types/ColorNormalization";
import { Culture } from "../types/Culture";

export interface ArtObjectDetails extends ArtObject {
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
