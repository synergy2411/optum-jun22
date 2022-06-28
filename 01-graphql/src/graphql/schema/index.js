
const typeDefs = /* GraphQL */`
type Query {
    hello: String!
    age: Int!
    me(searchTerm: String!): User
    users: [User!]!
    posts: [Post!]!
    comments: [Comment!]!
}
type Mutation {
    createUser(data: CreateUserInput!): User!
    createPost(authorId: ID!, data: CreatePostInput!): Post!
    createComment(authorId: ID!, postId: ID!, text: String!): Comment!
}
input CreatePostInput{
    title: String!
    body: String!
    published: Boolean
}
input CreateUserInput {
    name: String! 
    email: String! 
    age: Int!
}
type Comment {
    id: ID!
    text: String!
    post: Post!
    creator: User!
}
type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
}
type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    posts: [Post!]!
    comments: [Comment!]!
}
`

export { typeDefs }