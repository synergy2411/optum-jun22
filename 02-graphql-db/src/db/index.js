import { connect } from 'mongoose';

const mongoURI = "mongodb://localhost:27017/optum-db";

connect(mongoURI)
    .then(conn => console.log("Mongo Connected"))
    .catch(console.log)