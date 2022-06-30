"use strict";

var _mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/optum-db";
var URI = "mongodb+srv://optum:7unDi9pyomLTvI2f@cluster0.e9xsq.mongodb.net/?retryWrites=true&w=majority";
(0, _mongoose.connect)(URI).then(function (conn) {
  return console.log("MongoDB Connected");
})["catch"](console.log);