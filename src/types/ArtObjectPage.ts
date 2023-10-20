import { Culture } from "./Culture";

export type ArtObjectPage = {
  id: string;
  similarPages: string[];
  lang: Culture;
  objectNumber: string;
  tags: string[];
  plaqueDescription: string;
  audioFile1?: string;
  audioFileLabel1?: string;
  audioFileLabel2?: string;
  createdOn: string;
  updatedOn: string;
  adlibOverrides: {
    titel?: string;
    maker?: string;
    etiketText?: string;
  };
};
