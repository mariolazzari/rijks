# Rijks 
___

This package is a TypeScript based wrapper around the public REST APIs of Rijksmuseum (Amsterdam).

**Prerequisites**

In order to use this package, you need an api key: You can read more on how to obtain the API key on [this page](http://rijksmuseum.github.io).

This package requires [NodeJS](https://nodejs.org) (version 18 or later) and a node package manager (Npm, Yarn, Pnpm or Bun). 

To make sure you have them available on your machine, try running the following command.

```sh
$ npm -v && node -v
v10.1.0
v18.18.0
```
___

## Gettting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

___

## Installation

**BEFORE YOU INSTALL**: please read the prerequisites.

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/mariolazzari/rijks.git
$ cd rijks
```

To install and set up the library, run:

```sh
npm install @mariolazzari/rijks
```
___

## Usage

**Import package**
```js
import { Rijks } from "@mariolazzari/rijks"
```

**Watch mode**
```sh
npm test
```

**Unit testing**
```sh
npm test
```

**Bulding new version**
```sh
npm build
```

This task will create a distribution version of the project inside your local dist/ folder

## Rijks class

Rijks **class** content handles all the requests and the responses to the three main Rijks museum REST APIs.

### Constructor

In order to initialize Rijks **client**:

```js
const rijks = new Rijks(API_KEY, culture?)
```

Constructor parameters

| Parameter | Type    | Required | Default |
| --------- | ------- | :------: | ------- |
| apiKey    | string  |   Yes    |         |
| culture   | Culture |    No    | en      |


### Methods

Rijks client includes the following three methods:

#### getCollection

*Description*

This asynchronous **method** handles `GET /api/[culture]/collection` REST API.

*Prototype*

```ts
async getCollection(params: CollectionRequest): Promise<Result<CollectionResponse>> 
```

*Sample code*

```ts
const params: CollectionRequest = {searchTerm: "Vermeer"}
const collection: CollectionResponse = await rijks.getCollection(params)
```
##### CollectionRequest 

This **type** contains all the possible parameters handled by **getCollection** method.

| Parameter     | Type    | Required | Default |
| ------------- | ------- | :------: | ------- |
| searchTerm    | string  |   Yes    |         |
| page          | number  |   Yes    | 1       |
| perPage       | number  |   Yes    | 10      |
| format        | Format  |          | json    |
| culture       | Culture |          | en      |
| involvedMaker | string  |          |         |
| type          | string  |          |         |
| material      | string  |          |         |
| technique     | string  |          |         |
| period        | string  |          |         |
| hex           | string  |          |         |
| imageOnly     | string  |          | true    |
| topPieces     | string  |          | true    |
| sort          | Sort    |          |         |

##### CollectionResponse

This **type** contains all the values returned by **getCollection** method

| Value               | Type         | Required | Default |
| ------------------- | ------------ | :------: | :-----: |
| elapsedMilliseconds | number       |   Yes    |    0    |
| count               | number       |   Yes    |    0    |
| countFacets         | CountFacets  |          |   []    |
| artObjects          | ArtObjects[] |          |   []    |
| facets              | Facet[]      |          |   []    |



#### getCollectionDetails

*Description*

This **method** handles `GET /api/[culture]/collection/[object-number]` REST API.

*Prototype*

```ts 
async getCollectionDetails(params:CollectionDetailsRequst) : Promise<Result<CollectionDetailsResponse>>
```

##### CollectionDetailsRequst

This **type** handles all possible *getCollectionDetails* parameters.

```ts 
type CollectionDetailsRequest = {
  objectNumber: string;
  format?: Format;
}
```

| Parameter    | Type   | Required | Default |
| ------------ | ------ | :------: | ------- |
| objectNumber | string |   Yes    |         |
| format       | Format |          | json    |


##### CollectionDetailsResponse

This **type** handles *getCollectionDetails* response.

```ts 
type CollectionDetailsResponse = {
  elapsedMilliseconds: number;
  artObject: ArtObjectDetails;
  artObjectPage: ArtObjectPage;
}
```

#### getCollectionImage

*Description*

This **method** handles `GET /api/[culture]/collection/[object-number]/tiles` REST API.

*Prototype*

```ts 
async getCollectionImage(params:CollectionImageRequst) : Promise<Result<CollectionImageResponse>>
```

##### CollectionImageRequest

This **type** handles all possible *getCollectionImage* parameters.


```ts 
type CollectionImageRequest = {
  objectNumber: string;
}
```

| Parameter    | Type   | Required | Default |
| ------------ | ------ | :------: | ------- |
| objectNumber | string |   Yes    |         |

##### CollectionImageResponse

This **type** handles *getCollectionImage* response.

```ts 
type CollectionImageResponse = {
  levels: Level[];
}
```



## Types

In order to implement all features, the following common types have been implemended:

### Result

This **type** is a discriminated union that handles all REST APIs responses.

```ts
export type Result<T extends Response> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
```

### ArtObject

This **type** has the following structure:

```ts
type ArtObject = {
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
};
```

### ArtObjectDetails

This **type** extends *ArtObject* with the following addon fields:

```ts
export type ArtObjectDetails = {
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
} & ArtObject;
```

### ArtObjectPage

This **type** handles *ArtObjectPage* properties.

```ts
type ArtObjectPage = {
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
  adlibOverrides: Override;
};
```

### Color

This **type** handles *ArtObjectDetails* color properties.

```ts
type Color = {
  percentage: number;
  hex: string;
};
```

### CountFacets

This **type** has the following definition:
```ts
type CountFacets = {
  hasimage: number;
  ondisplay: number;
};
```

### Culture

This **type** contains all supported cultures.

```ts 
type Culture = "en | nl"
```

### Facet

This **type** contains facet properties.

```ts 
type Facet = {
  facets: FacetValue[];
  name: string;
  otherTerms: number;
  prettyName: number;
};
```

### FacetValue

This **type** contains facet key / value pairs for *Facet* type.

```ts 
type FacetValue = {
  key: string;
  value: number;
};
```

### Format

This **type** contains all supported APU repsonse types.

```ts 
type Format = "json" | "jsonp" | "xml";
```

### Image

This **type** contains all images properties.

```ts 
type Image = {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
};
```

### Lavel

This **type** contains level properties.

```ts 
type Level = {
  name: string;
  width: number;
  height: number;
  tiles: Tile[];
};
```

### Link

This **type** contains link properties.

```ts 
type Link = {
  self?: string;
  web?: string;
  search?: string;
};
```

### Override

This **type** handles optional overrides in *ArtObjectPage* type.

```ts
type Override = {
  titel?: string;
  maker?: string;
  etiketText?: string;
};
```

### Rsponse

This union **type** contains all possible API repsonse types.

```ts 
export type Response =
  | CollectionResponse
  | CollectionDetailsResponse
  | CollectionImageResponse;
```

### Sort

**Sort** type contains all supported sorting criterias.

```ts
type Sort = | "relevance" 
  | "objectYype" 
  | "chronologic" 
  | "achronologic" 
  | "artist" 
  | "artistDesc"
```

### Tile

This **type** contains all tile properties.

```ts 
type Tile = {
  x: number;
  y: number;
  url: string;
};
```


## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/art/rijks)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Rijksmuseum API [documentation](https://data.rijksmuseum.nl/object-metadata/api)

