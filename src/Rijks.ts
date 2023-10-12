import Culture from "./types/Culture";
import { fetchData } from "./utils";
import CollectionRequest from "./interfaces/CollectionRequest";
import CollectionResponse from "./interfaces/CollectionResponse";
import CollectionDetailsRequest from "./interfaces/CollectionDetailsRequest";
import CollectionDetailsResponse from "./interfaces/CollectionDetailsResponse";
import CollectionImageRequest from "./interfaces/CollectionImageRequest";
import CollectionImageResponse from "./interfaces/CollectionImageResponse";

class Rijks {
  private apiKey: string = "";
  private baseUrl: string = "https://www.rijksmuseum.nl/api/";

  constructor(apiKey: string, culture: Culture = "en") {
    this.apiKey = apiKey;
    this.baseUrl += `${culture}/collection`;
  }

  public async getCollection(params: CollectionRequest) {
    let url = `${this.baseUrl}?key=${this.apiKey}`;

    if (params.searchTerm) {
      url += `&q=${params.searchTerm}`;
    }
    if (params.involvedMaker) {
      url += `&involvedMaker=${params.involvedMaker}`;
    }
    if (params.imageOnly) {
      url += `&imgonly=${params.imageOnly}`;
    }
    if (params.page) {
      url += `&p=${params.page}`;
    }
    if (params.perPage) {
      url += `&ps=${params.perPage}`;
    }

    return await fetchData<CollectionResponse>(url);
  }

  public async getCollectionDetails(params: CollectionDetailsRequest) {
    const { objectNumber, format = "json" } = params;
    const url = `${this.baseUrl}/${objectNumber}?key=${this.apiKey}&format=${format}`;

    return await fetchData<CollectionDetailsResponse>(url);
  }

  public async getCollectionImage(params: CollectionImageRequest) {
    const { objectNumber } = params;
    const url = `${this.baseUrl}/${objectNumber}/tiles?key=${this.apiKey}`;

    return await fetchData<CollectionImageResponse>(url);
  }
}

export default Rijks;
