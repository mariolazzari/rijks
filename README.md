- [Rijks](#rijks)
  - [Gettting started](#gettting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Rijks class](#rijks-class)
    - [Constructor](#constructor)
    - [Result](#result)
    - [Types](#types)
      - [ArtObject](#artobject)
      - [ArtObjectDetails](#artobjectdetails)
      - [Color type](#color-type)
      - [CountFacets](#countfacets)
      - [Culture type](#culture-type)
      - [Facet type](#facet-type)
      - [FacetValue type](#facetvalue-type)
      - [Format type](#format-type)
      - [Image type](#image-type)
      - [Lavel type](#lavel-type)
      - [Link type](#link-type)
      - [Sort type](#sort-type)
      - [Tile type](#tile-type)
    - [Methods](#methods)
      - [getCollection](#getcollection)
        - [CollectionRequest](#collectionrequest)
        - [CollectionResponse](#collectionresponse)
      - [getCollectionDetails](#getcollectiondetails)
        - [CollectionDetailsRequst](#collectiondetailsrequst)
        - [CollectionDetailsResponse](#collectiondetailsresponse)
      - [getCollectionImage](#getcollectionimage)
        - [CollectionImageRequest](#collectionimagerequest)
        - [CollectionImageResponse](#collectionimageresponse)
  - [Authors](#authors)
  - [Links](#links)


# Rijks 
___

This package is a wrapper around the public REST APIs of Rijksmuseum (Amsterdam).

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

Rijks **class++ content handles all the requests and the responses to the thrre main Rijks museum REST APIs.

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

### Result

This **interface** handles all REST APIs responses.

```ts
interface Result<T> {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
}
```
****
### Types

In order to implement all features, the following common types have been implemended:

#### ArtObject

This **interface** has the following structure:

```ts
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
  webImage?: Image;
  headerImage?: Image;
  productionPlaces: string[];
};
```
#### ArtObjectDetails

This **interface** extends *ArtObject* with the following addon fields:

```ts
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
```

#### Color type

This **type** handles *ArtObjectDetails* color properties.

```ts
type Color = {
  percentage: number;
  hex: string;
};
```

#### CountFacets

This **type** has the following definition:
```ts
type CountFacets = {
  hasimage: number;
  ondisplay: number;
};
```

#### Culture type

This **type** contains all supported cultures.

```ts 
type Culture = "en | nl"
```

#### Facet type

This **type** contains facet properties.

```ts 
type Facet = {
  facets: FacetValue[];
  name: string;
  otherTerms: number;
  prettyName: number;
};
```

#### FacetValue type

This **type** contains facet key / value pairs for *Facet* type.

```ts 
type FacetValue = {
  key: string;
  value: number;
};
```

#### Format type

This **type** contains all supported APU repsonse types.

```ts 
type Format = "json" | "jsonp" | "xml";
```

#### Image type

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

#### Lavel type

This **type** contains level properties.

```ts 
type Level = {
  name: string;
  width: number;
  height: number;
  tiles: Tile[];
};
```

#### Link type

This **type** contains link properties.

```ts 
type Link = {
  self?: string;
  web?: string;
  search?: string;
};
```

#### Sort type

**Sort** type contains all supported sorting criterias.

```ts
type Sort = | "relevance" 
  | "objectYype" 
  | "chronologic" 
  | "achronologic" 
  | "artist" 
  | "artistDesc"
```

#### Tile type

This **type** contains all tile properties.

```ts 
type Tile = {
  x: number;
  y: number;
  url: string;
};
```

### Methods

Rijks client includes the following three methonds:

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

This **interface** contains all the possible parameters handled by **getCollection** method.

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

This **interface** contains all the values returned by **getCollection** method

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

This **interface** handles all possible *getCollectionDetails* parameters.

```ts 
interface CollectionDetailsRequest {
  objectNumber: string;
  format?: Format;
}
```

| Parameter    | Type   | Required | Default |
| ------------ | ------ | :------: | ------- |
| objectNumber | string |   Yes    |         |
| format       | Format |          | json    |


##### CollectionDetailsResponse

This **interface** handles *getCollectionDetails* response.

```ts 
interface CollectionDetailsResponse {
  elapsedMilliseconds: number;
  artObject: ArtObjectDetails;
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

This **interface** handles all possible *getCollectionImage* parameters.


```ts 
interface CollectionImageRequest {
  objectNumber: string;
}
```

| Parameter    | Type   | Required | Default |
| ------------ | ------ | :------: | ------- |
| objectNumber | string |   Yes    |         |

##### CollectionImageResponse

This **interface** handles *getCollectionImage* response.

```ts 
interface CollectionImageResponse {
  levels: Level[];
}
```

## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/art/rijks)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Rijksmuseum API [documentation](https://data.rijksmuseum.nl/object-metadata/api)

