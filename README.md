- [Rijks](#rijks)
  - [Gettting started](#gettting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Rijks class](#rijks-class)
    - [Constructor](#constructor)
    - [Result](#result)
    - [Types](#types)
      - [Culture type](#culture-type)
      - [Sort type](#sort-type)
      - [CountFacets](#countfacets)
      - [ArtObject](#artobject)
    - [Methods](#methods)
      - [getCollection](#getcollection)
        - [CollectionRequest](#collectionrequest)
        - [CollectionResponse](#collectionresponse)
      - [getCollectionDetails](#getcollectiondetails)
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
import Rijks from "@mariolazzari/rijks"
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
| apiKey    | string  | Yes      |         |
| culture   | Culture | No       | en      |

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

### Types

In order to implement all features, the following common types have been implemended:

#### Culture type

**Culture** type contains all supported cultures.

```ts 
type Culture = "en | nl"
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

#### CountFacets

This **type** has the following definition:
```ts
type CountFacets = {
  hasimage: number;
  ondisplay: number;
};
```

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
| searchTerm    | string  | Yes      |         |
| page          | number  | Yes      | 1       |
| perPage       | number  | Yes      | 10      |
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

| Parameter           | Type         | Required | Default |
| ------------------- | ------------ | :------: | ------- |
| elapsedMilliseconds | number       | Yes      | 0       |
| count               | number       | Yes      | 0       |
| countFacets         | CountFacets  |          |         |
| artObjects          | ArtObjects[] |          | []      |
****



#### getCollectionDetails

*Description*

This **method** handles `GET /api/[culture]/collection/[object-number]` REST API.

*Prototype*

```ts 
async getCollectionDetails(params:CollectionDetailsRequst) : Promise<Result<CollectionDetailsResponse>>
```

## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/art/rijks)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile

