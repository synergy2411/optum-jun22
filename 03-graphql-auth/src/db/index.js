import { connect } from 'mongoose';

// const URI = "mongodb://localhost:27017/optum-db";

const URI = `mongodb+srv://optum:7unDi9pyomLTvI2f@cluster0.e9xsq.mongodb.net/optum-db?retryWrites=true&w=majority`

connect(URI)
    .then(conn => console.log("MongoDB Connected"))
    .catch(console.log)