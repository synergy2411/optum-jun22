
const typeDefs = /* GraphQL */`
type Query {
   todos: [Todo!]!
   hello: String!
}
type Mutation {
    createTodo(title: String!): Todo!
}
type Todo {
    id: ID!
    title: String!
    status: Boolean!
}
`

export { typeDefs }