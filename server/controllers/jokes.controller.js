// importing Joke from the models file
const { Joke } = require('../models/jokes.model');


// =========== GET ALL ============
const getAllJokes = async (request, response) => {
    // code and testing 
    console.log('controller: getAllJokes');
    try {
        // create this constant once a joke has been found within MongoDB
        const jokes = await Joke.find();
        // return the response in object in .json format
        return response.json(jokes);
    } catch (error) {
        // displaying error if any have been found
        return response.statu(400).json({ ...error, message: error.message });
    }
};

// =========== GET ONE ============
const getSingleJoke = async (request, response) => {
    console.log('controller: getSingleJoke', request.params);

    try {
        // retrieving joke depending on the route given as a parameter and returning it
        const joke = await Joke.findById(request.params.id);
        return response.json(joke);
    } catch (error) {
        return response.status(400).json({ ...error, message: error.message });
    }
};

// =========== CREATE ONE ============
const createJoke = async (request, response) => {
    console.log('controller: createJoke', request.body);

    try {
        // creating a new joke and returning it
        const newJoke = await Joke.create(request.body);
        return response.json(newJoke);
    } catch (error) {
        return response.status(400).json({ ...error, messsage: error.message });

    }
}

// =========== UPDATE ONE ============
const updateJoke = async (request, response) => {
    console.log('controller: updateJoke', request.params, request.body);
    try {
        // finding joke by Id and processing update as long as the validators are true
        const joke = await Joke.findByIdAndUpdate(request.params.id, request.body, {
            runValidators: true,
            // ensures to return the boolean if true
            new: true,
        });
        return response.json(joke);
    } catch (error) {
        return response.status(400).json({ ...error, messsage: error.message });
    }
}

// =========== DELETE ONE ============
const deleteJoke = async (request, response) => {
    console.log('controller: deleteJoke', request.params);
    try {
        // searching by joke Id in the route and deleting the selected Id
        const joke = await Joke.findByIdAndDelete(request.params.id);
        return response.json(joke);
    } catch (error) {
        return response.status(400).json({ ...error, messsage: error.message });
    }
}
// =========== GET ONE RANDOM ============
const randomJoke = async (request, response) => {
    console.log('controller: getSingleJoke', request.params);

    try {
        // get all jokes 
        const jokes = await Joke.find();
        // creating arbitrary indez between 0 and number
        const randomIdx = Math.floor(Math.random() * jokes.length);
        // logging to get results
        console.log(randomIdx);
        // retrieves that one joke at the randomIdx 
        const randomJoke = jokes[randomIdx];
        return response.json(randomJoke);

    } catch (error) {
        return response.status(400).json({ ...error, message: error.message });
    }
};

// exporting each function as dictionary to pass them smoother
module.exports = {
    getAllJokes: getAllJokes,
    getSingleJoke: getSingleJoke,
    createJoke: createJoke,
    updateJoke: updateJoke,
    deleteJoke: deleteJoke,
    randomJoke: randomJoke
};