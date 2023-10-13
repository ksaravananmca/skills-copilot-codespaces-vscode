// Create web server application using Node.js and Express.js that will return all comments from the database. 
// The server should listen on port 3000 and the route should be /comments. 
// Use the provided database file to retrieve all comments from the database and return them as JSON. 
// The database file will be provided to you, so you don't need to create it. 
// You only need to read from it. 
// Use the provided comments.js file as a starting point. 
// You don't need to submit it, we will test your application with our own file.

const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const database = './database.json';

app.get('/comments', (req, res) => {
    fs.readFile(database, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            const comments = JSON.parse(data);
            res.json(comments);
        }
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
