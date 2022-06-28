// ES6 Module Import - latest JS import Syntax
import { createServer } from '@graphql-yoga/node';

// Common Module Import
// const { createServer } = require("@graphql-yoga/node");

const users = [
    { id : "U001", name : "John Doe", email : "john@test", age : 34},
    { id : "U002", name : "Alice Doe", email : "alice@test", age : 35},
    { id : "U003", name : "Mario Doe", email : "zzz@test", age : 36},
]
const posts = [
    {id :"P001", title: "Aweosme GraphQL", body : "...", published : false, author: "U001"},
    {id :"P002", title: "GraphQL 101", body : "...", published : true, author: "U002"},
    {id :"P003", title: "Mastering GraphQL", body : "...", published : false, author: "U001"},
    {id :"P004", title: "GraphQL for Beginners", body : "...", published : true, author: "U003"},
]

const typeDefs = /* GraphQL */`
    type Query {
        hello: String!
        age: Int!
        me(searchTerm: String!): User
        users: [User!]!
        posts: [Post!]!
    }
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
        posts: [Post!]!
    }
`

const resolvers = {
    Query : {
        hello () {
            return "World!!"
        },
        age(){
            return user.age;
        },
        me(parent, args, context, info){
            const userFound =  users.find(user => {
                const nameFound = user.name.toLowerCase().includes(args.searchTerm.toLowerCase())
                const emailFound = user.email.toLowerCase().includes(args.searchTerm.toLowerCase())
                return nameFound || emailFound;
            })
            if(!userFound){
                throw new Error("Unable to find the user")
            }
            return userFound
        },
        users(){
            return users.map(user => {
                const userPosts = posts.filter(post => post.author === user.id)
                return {...user, posts : userPosts}
            });
        },
        posts(){
            return posts.map(post => {
                const postUser = users.find(user => user.id === post.author)
                return {...post, author : postUser}
            })
        }
    }
}

const server = createServer({
    schema : {
        typeDefs,               // defines the structure of GraphQL API
        resolvers               // defines the behaviour against each 
    }
})

server.start()