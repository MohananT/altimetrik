const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const file = require('./controller/fileController')
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors())

// ... Configurations
app.use(logger('common'));

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));
// retrieve all customers
app.get('/customers', (req, res) => {
    let data = file.ReadCustomers();
    console.log(data)
    res.send(data);
})

app.post('/customer', (req, res) => {
    console.log('res', req.body);
    if (!req.body) return res.status(204);
    let contentStatus = file.CreateCustomer(req.body);
    if (contentStatus) res.status(201);
    else res.status(500)
})

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

file.ReadFile();

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running,  and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
); 