# Evaluate New Article with NLP Project
In this web application, it allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. When a user submits a valid URL of an article, the web page then dispalys sentiment analysis returned from `meaningcloud` API.


## How to use the app 

   - Enter a valid article URL in the `input` area and then click `submit` to get the analysis result 
## TL;DR

To get started developing right away:

* git clone https://github.com/Esraa-Mamdouh/evaluate_new_article_NLP.git
* install all project dependencies with `npm install`
* start the development server with `npm start`
* start development mode `npm run build-prod`
* start developer mode `npm run build-dev`
* Jest unit test with `npm test`

## What You're Getting
```
├── README.md - This file.
├── package.json # npm package manager file. 
├── webpack.dev.js
├── webpack.prod.js
├── .gitignore
├── .env  
└── src
    ├── client # Helpful images for your app. Use at your discretion.
    │   ├── __test__
    │   │   ├── checkURL.test.js
    │       ├── formHandler.test.js
    │   ├── js
    │       ├── checkURL.js
    │       ├── formHandler.js
    │   ├── styles
    │       ├── base.scss
    │       ├── form.scss
    │       ├── header.scss
    │       ├── resets.scss
    │   ├── views
    │   │   ├── index.html
    │   └── index.js
    ├── server
    │   ├── index.js  # server 
    │   └── mockAPI.js 
```

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Axios
* Webpack
* meaningcloud API
* Jest
* Workbox

## Important 
Workbox make the web application available even when you stop your local server.


## Copyright and Authoruty

***Esraa Mamdouh*** with a ***Udacity*** starter code in the Frontend web development nano-degree with Udacity.