// ES6 Module Import - latest JS import Syntax
import { createServer, createPubSub } from '@graphql-yoga/node';
import "event-target-polyfill";

import { users, posts, comments } from './model/db';
import { typeDefs } from './graphql/schema';
import { Query } from './graphql/resolvers/Query';
import { Mutation } from './graphql/resolvers/Mutation';
import { Subscription } from './graphql/resolvers/Subscription';
import { User } from './graphql/resolvers/User';
import { Post } from './graphql/resolvers/Post';
import { Comment } from './graphql/resolvers/Comment';

// Common Module Import
// const { createServer } = require("@graphql-yoga/node");

const pubsub = createPubSub({
    event : {
        Event,
        EventTarget
    }
})

const resolvers = {
    Query,
    Mutation,
    Subscription,
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
        db,
        pubsub
    }
})

server.start()