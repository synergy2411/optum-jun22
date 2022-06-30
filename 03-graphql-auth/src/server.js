import { createServer } from '@graphql-yoga/node';
import "./db";
import { typeDefs } from './graphql/schema';
import { Query } from './graphql/resolvers/Query';
import { Mutation } from './graphql/resolvers/Mutation';

const resolvers = {
    Query,
    Mutation
}

const server = createServer({
    schema :{
        typeDefs,
        resolvers
    }
})


server.start();