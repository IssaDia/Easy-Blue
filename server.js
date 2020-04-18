var express = require('express')
var cookieParser = require('cookie-parser');


app.prepare().then(() => {
    const server = express();
    server.use(cookieParser());
  });