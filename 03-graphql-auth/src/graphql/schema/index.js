const typeDefs = /* GraphQL */`

    type Query {
        hello: String!
    }
    type Mutation {
        createUser(data: AuthInput): User!
        login(data: AuthInput!) : AuthPayload!
    }
    type AuthPayload {
        token: String!
    }
    type User {
        id: ID!
        email: String!
    }
    input AuthInput{
        email: String!
        password: String!
    }

`

export { typeDefs }