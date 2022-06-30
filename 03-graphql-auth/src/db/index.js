import { connect } from 'mongoose';

const URI = "mongodb://localhost:27017/optum-db";

connect(URI)
    .then(conn => console.log("MongoDB Connected"))
    .catch(console.log)