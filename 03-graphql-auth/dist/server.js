"use strict";

var _node = require("@graphql-yoga/node");

require("./db");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _schema = require("./graphql/schema");

var _Query = require("./graphql/resolvers/Query");

var _Mutation = require("./graphql/resolvers/Mutation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 9090;
app.use((0, _cors["default"])());
var resolvers = {
  Query: _Query.Query,
  Mutation: _Mutation.Mutation
};
var server = (0, _node.createServer)({
  schema: {
    typeDefs: _schema.typeDefs,
    resolvers: resolvers
  },
  context: function context(_ref) {
    var req = _ref.req,
        res = _ref.res;
    var authHeader = req.headers.authorization;
    var token = null;

    if (authHeader) {
      token = authHeader.split(" ")[1];
    }

    return {
      token: token
    };
  }
});
app.get("/", function (req, res) {
  res.send({
    message: "Pls visit /graphql to access single endpoint"
  });
});
app.use("/graphql", server);
app.listen(PORT, function () {
  return console.log("Server started at PORT : ", PORT);
}); // server.start();