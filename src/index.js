const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-avaut.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
});

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     //req.io = io;

//     next();
// });

app.use(cors());

app.use(require('./routes'));

var porta = process.env.PORT || 8080;
app.listen(porta);