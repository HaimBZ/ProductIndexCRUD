## PRODUCT INDEX CRUD App

## Overview

A simple Product Index App which uses CRUD architecture and restful service.
in the app you can Add, Edit, Delete and view Products tickets.
A product filter search is available.

## Start the APP
1. clone the repo
2. you will have tow folders server/client
3. in server folder
    3.1 run npm install
    3.3 run mongod to connect db (you will need a mongo db connection)
    3.2 run npm start
    3.3 server will be available in localhost:5000
4. in client folder
    4.1 npm install
    4.2 npm start
    4.3 app should run in localhost:3000

## App Architecture

Application architecture and technologies:
## Frontend
bootstrapped with Create React App. Build configurations derives from this bundle.
UI using React/Redux with Bootstrap for styling.

Ui Structure elements:

## App.js
main UI application configuration and dependencies:
  1. browserHistory, manipulate routes
  2. syncHistoryWithStore, syncs the browser history with redux store
  3. PropTypes, react app data type configurations
  4. configureStore, configure redux/application store data

## Actions
  in charge to send data from your application to your store

  appActions.js
  productActions.js
    addProduct
    deleteProduct
    editProduct
    fetch

## Components
  UI independent, reusable components which holds isolated logics. 
  each componment will handle each crud action

  App.css
  App.js
  Product.js
  ProductEditForm.js
  ProductForm.js
  Products.js

## Containers
  components that is responsible for retrieving data, by using Redux’s connect and mapStateToProps functions. handle the component which aware of the application state and connected to the redux store. 

  App.js
  Product.js
  Products.js

## Reducers
  used to update the application state object in the store.

  appReducer.js
  index.js
  productReducer.js

## Store
  application state, handled with actions and reducers

  configureStore.js


# Backend
the server works with express server and uses Mogo DB. 
it has MVC like structure. it has configurations for comunicating 
with the DB and set the CRUD functions for the rest service.

app.js - 
generic server configurations and dependencies:

 1. body-parser, will let us pull POST content from our HTTP request
  2. mongoose, communicate with the Mongo DB
  3. morgan, used for logging request details
  4. babel, es6 compiler
  5. source-map-support, friendly compilation error handling

app_hooked.js - babel-register configurations

#backend structure:
## controller
  handle the server rest service configuration with a CRUD functionality.

  product.server.controller.js

## models
  DB schema configurations

## routes
  the api routes configurations for the server configurations in app.js