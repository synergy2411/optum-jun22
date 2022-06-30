"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;
var typeDefs =
/* GraphQL */
"\n\n    type Query {\n        hello: String!\n        profile: UserProfile!\n    }\n    type Mutation {\n        createUser(data: AuthInput): User!\n        login(data: AuthInput!) : AuthPayload!\n    }\n    type UserProfile {\n        id: ID!\n        email: String!\n    }\n    type AuthPayload {\n        token: String!\n    }\n    type User {\n        id: ID!\n        email: String!\n    }\n    input AuthInput{\n        email: String!\n        password: String!\n    }\n\n";
exports.typeDefs = typeDefs;