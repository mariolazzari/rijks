import { Culture } from "./types/Culture";
import { CollectionRequest } from "./types/CollectionRequest";
import { CollectionResponse } from "./types/CollectionResponse";
import { CollectionDetailsRequest } from "./types/CollectionDetailsRequest";
import { CollectionDetailsResponse } from "./types/CollectionDetailsResponse";
import { CollectionImageRequest } from "./types/CollectionImageRequest";
import { CollectionImageResponse } from "./types/CollectionImageResponse";
import { Result } from "./types/Result";
import { Response } from "./types/Response";
import { Sort } from "./types/Sort";

export class Rijks {
  private apiKey: string = "";
  private baseUrl: string = "https://www.rijksmuseum.nl/api/";

  constructor(apiKey: string, culture: Culture = "en") {
    this.apiKey = apiKey;
    this.baseUrl += `${culture}/collection`;
  }

  private errorHandler(ex: unknown) {
    const error = ex instanceof Error ? ex.message : "Internal server errror";

    return error;
  }

  // fetch data data from api
  private async fetchData<T extends Response>(uri: string): Promise<Result<T>> {
    try {
      const res = await fetch(uri);

      // error handling
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      // success
      const data: T = await res.json();

      return {
        success: true,
        data,
      };
    } catch (ex) {
      return {
        success: false,
        error: this.errorHandler(ex),
      };
    }
  }

  // compute api collection api url
  private getCollectionUrl(params: CollectionRequest) {
    // request params
    const {
      page,
      perPage,
      format,
      involvedMaker,
      type,
      material,
      technique,
      period,
      hex,
      imageOnly,
      topPieces,
    } = params;

    let url = "";
    if (page) {
      url += `&p=${page}`;
    }
    if (perPage) {
      url += `&ps=${perPage}`;
    }
    if (format) {
      url += `&format=${format}`;
    }
    if (involvedMaker) {
      url += `&involvedMaker=${involvedMaker}`;
    }
    if (type) {
      url += `&type=${type}`;
    }
    if (material) {
      url += `&material=${material}`;
    }
    if (technique) {
      url += `&technique=${technique}`;
    }
    if (period) {
      url += `&f.dating.period=${period}`;
    }
    if (hex) {
      url += `&f.normalized32Colors.hex=${hex}`;
    }
    if (imageOnly) {
      url += `&imgonly=${imageOnly}`;
    }
    if (topPieces) {
      url += `&toppieces=${imageOnly}`;
    }

    return url;
  }

  // compute sort criteria
  private getSorting(sort: Sort) {
    let criteria = "";

    switch (sort) {
      case "relevance":
        criteria = "&s=relevance";
        break;

      case "objectType":
        criteria = "objecttype";
        break;

      case "chronologic":
        criteria = "chronologic";
        break;
    }

    return criteria ? `&s=${criteria}` : "";
  }

  // collection api
  public async getCollection(params: CollectionRequest) {
    // build api endpoint
    const { searchTerm, sort } = params;
    let url = `${this.baseUrl}?key=${this.apiKey}&q=${searchTerm}`;
    // parse api params
    url += this.getCollectionUrl(params);
    // sorting criteria
    if (sort) {
      url += this.getSorting(sort);
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
