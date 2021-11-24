<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.io">
    <img src="https://dyte-uploads.s3.ap-south-1.amazonaws.com/dyte-logo-dark.svg" alt="Logo" height="40">
  </a>

  <h3 align="center">React Sample App</h3>

  <p align="center">
    A basic project demonstrating how you can integrate **dyte** in your React app.
    <br />
    <a href="https://docs.dyte.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dyte-react-sample.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/dyte-in/react-sample-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-in/react-sample-app/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Structure](#structure)
- [Application FLow](#application-flow)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)

- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

A basic project demonstrating how you can integrate **dyte** in your React app.

![very-basic](docs/site.png)

Choose from a list of available meeting rooms, or create a new Dyte meeting and join as a participant or a host.

### Built With

- [create-react-app](https://github.com/facebook/create-react-app)
- [dyte-client](https://www.npmjs.com/package/dyte-client)
- [Axios](https://github.com/axios/axios)

<!-- GETTING STARTED -->

## Structure

React App structure:

```
├── src
│   ├── 📁 container // contains main screen page component.
│   ├── 📁 exampleComponent // sample example components
│   ├── App.tsx // page routes are defined here
│   ├── index.tsx // application js entry point

```

## Getting Started

Please make sure you have an organization ID and API Key for your application. These can be obtained from the developer portal.

### Installation

1. Clone the repo

```sh
git clone https://github.com/dyte-in/react-sample-app.git
```

2. Install NPM packages

```sh
npm install
```

3. Create an `.env` file with your credentials. Use `.env.example` as a template.

```sh
cp .env.example .env
```

4. Run the application

```sh
npm start
```


## Application Flow


On opening `http://localhost:3000` in your browser, the client will first make an api call to check list of available meeting rooms. If not, then you can create a meeting room by entering a title and then click on create room button. The newly created room can be seen under the meeting room list section.

You can select the example that you want to test from the select example section. You can also refer the example component code with the path provided.

Finally, you can test the example by joining any meeting room as a host or as a participant. On clicking the button, a new user will be created by making an api call and meeting room will be launched.

All mandatory credentials of a user (i.e. roomname, user authtoken etc.) that are required to launch the meetings are stored in session storage.


<!-- USAGE EXAMPLES -->

## Usage

Choose from a list of examples and then join on any meeting room to test it live.

You can also refer the example component code with the path provided.

<!-- You can use this example as a reference on how you can integrate your webapp with dyte. -->

_For documentation on APIs and client SDKs, please refer to our [official documentation](https://docs.dyte.io)._

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.
