// ES6 Module Import - latest JS import Syntax
import { createServer, createPubSub } from '@graphql-yoga/node';
import "event-target-polyfill";
import "./db";

import { typeDefs } from './graphql/schema';
import { Query } from './graphql/resolvers/Query';
import { Mutation } from './graphql/resolvers/Mutation';

const pubsub = createPubSub({
    event : {
        Event,
        EventTarget
    }
})

const resolvers = {
    Query,
    Mutation
}


const server = createServer({
    schema: {
        typeDefs,               // defines the structure of GraphQL API
        resolvers               // defines the behaviour against each 
    },
    context : {
        pubsub
    }
})

server.start()