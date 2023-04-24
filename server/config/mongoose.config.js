// connecting to the mongoose library 
const mongoose = require('mongoose');

// information below is located in the [.env] file for security purposes 
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// establishing the connection with Mongoose Atlas 
const uri = `mongodb+srv://${username}:${pw}@mern.f6wmxvr.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// connecting to the DB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

    