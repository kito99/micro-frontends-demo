# app-one

Simple [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) app built with 
[TypeScript](https://typescriptlang.org), [lit-element](https://lit-element.polymer-project.org/) and [lit-html](https://lit-html.polymer-project.org/), that uses the cute [emoji slider](https://vaadin.com/router) web component.


It is part of `micro-frontends-demo`; see the [main README](../README.md) for details about the entire project. 

## Install

First, make sure you have Node (or Yarn) installed.

Run `npm install`.
 
## Build

The app is built using Rollup and currently it's using ES6 Modules (for evergreen browsers). See `rollup.config.js` for details.

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory. 

## Development server

This is only necessary if you're actually modifying the app.

If you haven't already, install Open Web Components es-dev-server:

```
npm install es-dev-server
```

Run `npm start` for the dev server. Navigate to the specified URL (for example, `http://localhost:7000`). 
This will launch `index.html` so you can view the app.

## Real-time changes

If you want to make changed and have them built immediately (and reloaded by `es-dev-server`),
run `npm run watch`.
