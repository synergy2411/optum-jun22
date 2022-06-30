"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;

var _mongoose = require("mongoose");

var userSchema = {
  email: {
    type: _mongoose.Schema.Types.String,
    require: true
  },
  password: {
    type: _mongoose.Schema.Types.String,
    require: true
  }
};
var UserModel = (0, _mongoose.model)("Admin", userSchema);
exports.UserModel = UserModel;