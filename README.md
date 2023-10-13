[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Rijks

> Rijks museum APIs client

## Prerequisites

Before you can use this wrapper or the API, you need a api-key. You can read more on how to obtain the API key and the parameters you can use from this page: [Rijks museum APIs](http://nodejs.org/) 

This project requires NodeJS (version 18 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Rijks](#rijks)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
  - [API](#api)
    - [Rijks](#rijks-1)
      - [Options](#options)
    - [getCollection](#getcollection)
    - [getCollectionDetails](#getcollectiondetails)
    - [getCollectionImage](#getcollectionimage)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/mariolazzari/rijks.git
$ cd rijks
```

To install and set up the library, run:

```sh
$ npm install @mariolazzari/rijks
```

Or if you prefer using Yarn:

```sh
$ yarn add @mariolazzari/rijks
```

## Usage

### Serving the app

```sh
$ npm start
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

## API

### Rijks

```js
const rijks = new Rijks(apiKey: string, culture: Culture = "en")
```

Supported options for the `Rijks` class are listed below.

#### Options

`apiKey`

| Type | Default value |
| --- | --- |
| string | '' |

`culture`

| Type | Default value |
| --- | --- |
| string | 'en' |


### getCollection

```js
const collection: CollectionResponse = await rijks.getCollection(params: CollectionRequest)
```

Perform an asynchronous http request against Rijks collection api.

### getCollectionDetails

```js
const collectionDetails: CollectionDetailsResponse= await rijks.getCollectionDetails(params:CollectionDetailsRequest)
```

Perform an asynchronous http request against Rijks collection details api.

### getCollectionImage


```js
const collectionImage: CollectionImageResponse = await rijks.getCollectionImage(params: CollectionImageRequest)
```

Perform an asynchronous http request against Rijks collection image api.


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

* Typescript
* Visual Studio Code
* Vitest

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mariolazzari/tags).

## Authors

* **Mario Lazzari** - *Initial work* - [mariolazzari](https://github.com/mariolazzari)

See also the list of [contributors](https://github.com/mariolazzari/rijks/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019)