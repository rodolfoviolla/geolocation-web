## Geolocation App

This application is able to get your current address and the weather in your location, based on latitude and longitude provided by your device's GPS.

A demo version is hosted [here](https://geolocation-web.vercel.app/).

---

### How to run locally

```bash
# Clone this repository
$ git clone <git@github.com:rodolfoviolla/geolocation-web.git>

# Access project folder
$ cd geolocation-web

# Install dependencies
$ yarn

# Copy the .env file
$ cp .env.example .env

```

- To continue, you must fill the [Google Maps API](https://console.cloud.google.com/google/maps-apis/credentials) and [Open Weather API](https://home.openweathermap.org/api_keys) variables with your `API tokens`

```
REACT_APP_GOOGLE_MAPS_API_TOKEN=
REACT_APP_OPEN_WEATHER_API_TOKEN=
```
- Finally, you can run the application

```bash
# Execute the development server
$ yarn start

# The application will run on port 3000 - access <http://localhost:3000>
```
---
### Techs

The following tools are used to build this project:

- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
### Author
---

<p>
  <a href="#">
    <img src="https://avatars1.githubusercontent.com/u/64096832?s=460&u=b785643ea39e67bb0f05c9f4d43e478b7029c807&v=4" height="100px" width="100px" style="border-radius:50px" alt="Rodolfo's profile picture"/>
    <br />
    <sub><b>Rodolfo Della Violla</b></sub>
  </a>

  <p>
    <a href="https://www.linkedin.com/in/rodolfoviolla/">
      <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-%237159c1?style=flat&logo=linkedin">
    </a>
    <a href="https://twitter.com/RodolfoViolla">
      <img alt="Twitter" src="https://img.shields.io/badge/-Twitter-%237159c1?style=flat&logo=twitter">
    </a>
    <a href="mailto:rodolfo.violla@gmail.com">
      <img alt="Gmail" src="https://img.shields.io/badge/-Email-%237159c1?style=flat&logo=gmail">
    </a>
  </p>
</p>
