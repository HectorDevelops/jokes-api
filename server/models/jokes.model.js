// importing the mongoose library 
const mongoose = require('mongoose');

// creating a schema for the jokes that will be CRUD
const JokingSchema = new mongoose.Schema(
    {
        // creating an object and their validations
        setup: {
            type: String, 
            required: [true, 'Required field.'],
            minSetUp: [10, "This should be at least {MINSETUP} characters long."], 
        }, 
        punchline: {
            type: String, 
            required: [true, 'Required field.'],
            minPunchline: [3, "This should be at least {MINSETUP} characters long."], 
        }
        // adding a timestramp to check when the data has been inserted/updated
    }, {timestamps: true});

    // storing the schema into a variable to store into our DB
    const Joke = mongoose.model('Joke', JokingSchema);
    // exporting variable to use in our server
    module.exports = {Joke: Joke};