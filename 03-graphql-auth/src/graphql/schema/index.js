const typeDefs = /* GraphQL */`

    type Query {
        hello: String!
        profile: UserProfile!
    }
    type Mutation {
        createUser(data: AuthInput): User!
        login(data: AuthInput!) : AuthPayload!
    }
    type UserProfile {
        id: ID!
        name: String!
        email: String!
        age: Int!
        salary: Int!
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