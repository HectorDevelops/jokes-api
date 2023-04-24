// importing all of the controllers we have to re-route
const {
    getAllJokes,
    getSingleJoke,
    createJoke,
    updateJoke,
    deleteJoke,
    randomJoke
} = require('../controllers/jokes.controller');

// exporting each of these routes into server.js to run 
module.exports = (app) => {
    app.post('/api/joke', createJoke);
    app.get('/api/jokes', getAllJokes);
    app.get('/api/joke/random', randomJoke);
    // ensuring to process random as we are taking parameters below
    app.get('/api/joke/:id', getSingleJoke);
    app.delete('/api/joke/:id', deleteJoke);
    app.put('/api/joke/:id', updateJoke);
}