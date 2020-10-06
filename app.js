const express = require('express');
var sql = require("mssql");
const app = express()

//Bring in routes (get as in GET)
const getRoutes = require('./routes/get')

//Route handling - also middleware 
app.use('/', getRoutes);

//Action
const port = 8080
app.listen(port, () => {
    console.log("Welcom to the car bank", port);
});

