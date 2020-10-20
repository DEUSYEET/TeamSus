const express = require('express');
const app = express();
const routes = require(__dirname+'/routes.js');

app.use("/", routes);

app.listen(3000);