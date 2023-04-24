// connects to Mongo Atlas account and uses username and password located in the [.env] file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// gathers the port information from the [.env] file
const port = process.env.PORT;

require('./config/mongoose.config'); 

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// assigning the routes importation into jokeRoutes
const jokeRoutes = require('./routes/jokes.routes')
// initializing the function and running it
jokeRoutes(app);
    
app.listen(port, () => console.log(`Currently listening on port ${port}!`));