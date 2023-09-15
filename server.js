//Requires for express/db connection/ and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//Declare port 
const PORT = process.env.PORT || 3001;

//Declare app variable for express
const app = express();


//app.use for urlencoded and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//.use for routes
app.use(routes);


//database connection
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for The Space Network  now on port ${PORT}!`);
    });
});

