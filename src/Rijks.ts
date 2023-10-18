import { Culture } from "./types/Culture";
import { CollectionRequest } from "./interfaces/CollectionRequest";
import { CollectionResponse } from "./interfaces/CollectionResponse";
import { CollectionDetailsRequest } from "./interfaces/CollectionDetailsRequest";
import { CollectionDetailsResponse } from "./interfaces/CollectionDetailsResponse";
import { CollectionImageRequest } from "./interfaces/CollectionImageRequest";
import { CollectionImageResponse } from "./interfaces/CollectionImageResponse";
import { ResultType } from "./types/ResultType";
import { Result } from "./interfaces/Result";

export class Rijks {
  private apiKey: string = "";
  private baseUrl: string = "https://www.rijksmuseum.nl/api/";

  constructor(apiKey: string, culture: Culture = "en") {
    this.apiKey = apiKey;
    this.baseUrl += `${culture}/collection`;
  }

  // fetch data data from api
  private async fetchData<T extends ResultType>(uri: string) {
    let result: Result<T> = {
      success: false,
      status: 500,
      data: undefined,
      error: undefined,
    };

    try {
      const res = await fetch(uri);
      result.status = res.status;

      if (res.ok) {
        result.success = true;
        result.data = await res.json();
      } else {
        result.error = res.statusText;
      }
    } catch (ex) {
      if (ex instanceof Error) {
        result.error = ex.message;
      } else {
        result.error = JSON.stringify(ex);
      }
    } finally {
      return result;
    }
  }

  // collection api
  public async getCollection(params: CollectionRequest) {
    // request params
    const {
      searchTerm = "vermeer",
      page = 1,
      perPage = 10,
      involvedMaker,
      imageOnly,
    } = params;

    // build api endpoint
    let url = `${this.baseUrl}?key=${this.apiKey}&q=${searchTerm}`;
    if (page) {
      url += `&p=${page}`;
    }
    if (perPage) {
      url += `&ps=${perPage}`;
    }
    if (involvedMaker) {
      url += `&involvedMaker=${involvedMaker}`;
    }
    if (imageOnly) {
      url += `&imgonly=${imageOnly}`;
    }

    return await this.fetchData<CollectionResponse>(url);
  }

  // collection details api
  public async getCollectionDetails(params: CollectionDetailsRequest) {
    const { objectNumber, format = "json" } = params;
    const url = `${this.baseUrl}/${objectNumber}?key=${this.apiKey}&format=${format}`;

    return await this.fetchData<CollectionDetailsResponse>(url);
  }

  // collection image api
  public async getCollectionImage(params: CollectionImageRequest) {
    const { objectNumber } = params;
    const url = `${this.baseUrl}/${objectNumber}/tiles?key=${this.apiKey}`;

    return await this.fetchData<CollectionImageResponse>(url);
  }
}
