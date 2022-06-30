import { createServer } from '@graphql-yoga/node';
import "./db";
import express from 'express';
import cors from 'cors';
import { typeDefs } from './graphql/schema';
import { Query } from './graphql/resolvers/Query';
import { Mutation } from './graphql/resolvers/Mutation';

const app = express();
const PORT = process.env.PORT || 9090;
app.use(cors());

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

app.get("/", (req, res) => {
    res.send({message : "Pls visit /graphql to access single endpoint"})
})

app.use("/graphql", server)

app.listen(PORT, () => console.log("Server started at PORT : ", PORT))
// server.start();