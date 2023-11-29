const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);

module.exports = app;