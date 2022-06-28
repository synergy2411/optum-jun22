// ES6 Module Import - latest JS import Syntax
import { createServer } from '@graphql-yoga/node';
import { v4 } from 'uuid';

// Common Module Import
// const { createServer } = require("@graphql-yoga/node");

const users = [
    { id: "U001", name: "John Doe", email: "john@test", age: 34 },
    { id: "U002", name: "Alice Doe", email: "alice@test", age: 35 },
    { id: "U003", name: "Mario Doe", email: "zzz@test", age: 36 },
]
const posts = [
    { id: "P001", title: "Aweosme GraphQL", body: "...", published: false, author: "U001" },
    { id: "P002", title: "GraphQL 101", body: "...", published: true, author: "U002" },
    { id: "P003", title: "Mastering GraphQL", body: "...", published: false, author: "U001" },
    { id: "P004", title: "GraphQL for Beginners", body: "...", published: true, author: "U003" },
]
const comments = [
    { id: "C001", text: "I Love it", post: "P001", creator: "U003"},
    { id: "C002", text: "Like it", post: "P002", creator: "U003"},
    { id: "C003", text: "it was awesosme", post: "P003", creator: "U002"},
    { id: "C004", text: "Nice post", post: "P002", creator: "U001"},
]

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
        createUser(data: CreateUserInput): User!
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

const resolvers = {
    Query: {
        hello() {
            return "World!!"
        },
        age() {
            return user.age;
        },
        me(parent, args, context, info) {
            const userFound = users.find(user => {
                const nameFound = user.name.toLowerCase().includes(args.searchTerm.toLowerCase())
                const emailFound = user.email.toLowerCase().includes(args.searchTerm.toLowerCase())
                return nameFound || emailFound;
            })
            if (!userFound) {
                throw new Error("Unable to find the user")
            }
            return userFound
        },
        users() {
            return users;
            // return users.map(user => {
            //     const userPosts = posts.filter(post => post.author === user.id)
            //     const userComments = comments.filter(comment => comment.creator === user.id)
            //     return { ...user, posts: userPosts, comments : userComments }
            // });
        },
        posts() {
            return posts;
            // return posts.map(post => {
            //     const postUser = users.find(user => user.id === post.author)
            //     const postComments = comments.filter(comment => comment.post === post.id)
            //     return { ...post, author: postUser, comments : postComments }
            // })
        },
        comments(){
            return comments;
            // return comments.map(comment =>{
            //     const commentPost = posts.find(post => post.id === comment.post)
            //     const commentCreator = users.find(user => user.id === comment.creator)
            //     return {...comment, post : commentPost, creator : commentCreator}
            // })
        }
    },
    Mutation: {
        createUser(parent, args){
            const {name, email, age} = args.data
            const newUser = {
                id: v4(),
                name,
                email,
                age
            }
            users.push(newUser)
            return newUser;
        }
    },
    User :{
        posts(parent, args, context, info){
            return posts.filter(post => post.author === parent.id)
        },
        comments(parent, args, context, info){
            return comments.filter(comment => comment.creator === parent.id)
        }
    },
    Post :{
        author(parent){
            return users.find(user => user.id === parent.author);
        },
        comments(parent){
            return comments.filter(comment => comment.post === parent.id)
        }
    },
    Comment : {
        post(parent){
            return posts.find(post => post.id === parent.post)
        },
        creator(parent){
            return users.find(user => user.id === parent.creator)
        }
    }
}

const server = createServer({
    schema: {
        typeDefs,               // defines the structure of GraphQL API
        resolvers               // defines the behaviour against each 
    }
})

server.start()