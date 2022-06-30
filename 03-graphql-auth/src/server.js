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
    },
    context : ({req, res}) => {
        let authHeader = req.headers.authorization
        let token = null;
        if(authHeader){
            token = authHeader.split(" ")[1]
        }
        return {
            token
        }
    }
})


server.start();