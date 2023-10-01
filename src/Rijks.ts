import CollectionRequest from "./types/CollectionRequest";
import CollectionResponse from "./types/CollectionResponse";
import Culture from "./types/Culture";
import { fetchData } from "./utils";

class Rijks {
  apiKey: string = "";
  baseUrl: string = "https://www.rijksmuseum.nl/api/";

  constructor(apiKey: string, culture: Culture = "en") {
    this.apiKey = apiKey;
    this.baseUrl += culture;
  }

  async search(params: CollectionRequest) {
    let url = `${this.baseUrl}/collection?key=${this.apiKey}`;
    if (params.involvedMaker) {
      url += `&involvedMaker=${params.involvedMaker}`;
    }

    return await fetchData<CollectionResponse>(url);
  }
}

export default Rijks;
