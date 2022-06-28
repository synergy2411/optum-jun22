import { createServer } from '@graphql-yoga/node';

const typeDefs = /* GraphQL */`
    type Query {
        hello: String!
    }
`

const resolvers = {
    Query : {
        hello () {
            return "World!!"
        }
    }
}

const server = createServer({
    schema : {
        typeDefs,               // defines the structure of GraphQL API
        resolvers               // defines the behavour against each 
    }
})

server.start()