# app-two

Default [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4 web app packaged as a Web Component using [Angular Elements](https://angular.io/guide/elements). 
It is part of `micro-frontends-demo`; see the [main README](../README.md) for details about the entire project. 

This app also has a [custom webpack config](./elements-webpack.config.js) that changes the name of the webpack loader 
in order to support multiple Angular Elements components on the same page.
  
## Install

First, make sure you have Node (or Yarn) installed.

Run `npm install`.  
  
## Build

Run `npm run build:elements` to build the project. The web component build artifacts will be stored in the `elements/` directory. 

## Development server

This is only necessary if you're actually modifying the app.

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
