# Madlibs Madness API

- Deployed API: https://madlibs-84a7cm3v0-adelle-pitsas.vercel.app/
- Frontend UI deployment: https://mobile-madlibs.vercel.app/
- Frontend UI Repo: https://github.com/Adelle-Pitsas/madlibs-react-app

## Background
this server was created to accompany Madlibs Madness, a project I created for an end-of-module project at the Turing School of Software and Design. this serve was written in JavaScript using Express

## Installation Instructions
1. Clone down this repo into your local machine
1. Change into the cloned directory
1. Install dependencies using `npm i`
1. Fire up the serve by using `node server.js` or `nodemon server.js`

## Endpoints

| Description |    URL   |  Method  | Required Properties | Sample Successful Resposnse |
|-------------|----------|----------|---------------------|-----------------------------|
|Get all madlibs |http://localhost:3001/madlibs | GET | none | array containing 25 objects ({id: number, quote: string, parsedQuote: string', wordsNeeded: [string, string]}
