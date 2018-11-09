# Node.js example app for Gleis PaaS

This is a simple Node.js example app made for the Gleis PaaS and which uses the [Express](http://expressjs.com/) web framework.

## Prerequisites

In order to run this sample app locally you will need [Node.js](https://nodejs.org/) to be installed on your computer and an account on the Gleis PaaS as well as the Gleis Ruby gem to be able to deploy it.

## Try out sample app locally

Download your own copy of this sample app:
```sh
$ git clone git@github.com:towards/nodejs-example.git
$ cd nodejs-example
```

Install dependencies:
```sh
$ npm install
```

Start app:
```sh
$ npm start
```
The sample app should now be reachable locally at [http://localhost:5000/](http://localhost:5000)

## Deploy to Gleis

Create new app on Gleis:
```sh
$ gleis app create
```

Upload app to Gleis:
```sh
$ git push gleis master
```

The sample app will be online in a few seconds and reachable through the secure URL mentioned when you created the Gleis app with the above command.
