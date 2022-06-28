// ES6 Module Import - latest JS import Syntax
import { createServer } from '@graphql-yoga/node';
import { users, posts, comments } from './model/db';
import { typeDefs } from './graphql/schema';
import { Query } from './graphql/resolvers/Query';
import { Mutation } from './graphql/resolvers/Mutation';
import { User } from './graphql/resolvers/User';
import { Post } from './graphql/resolvers/Post';
import { Comment } from './graphql/resolvers/Comment';

// Common Module Import
// const { createServer } = require("@graphql-yoga/node");

const resolvers = {
    Query,
    Mutation,
    User,
    Post ,
    Comment
}

let db = { 
    users, posts, comments
}

const server = createServer({
    schema: {
        typeDefs,               // defines the structure of GraphQL API
        resolvers               // defines the behaviour against each 
    },
    context : {
        db
    }
})

server.start()