const mongoose = require('mongoose');
const consts = require('../consts');

const {DB_HOST,DB_USER,DB_PASS} = consts;

const url = `${DB_HOST}`;
const options = {
    useNewUrlParser:true,
    useCreateIndex:true,
    user: DB_USER,
    pass: DB_PASS,
    useUnifiedTopology: true
};

mongoose
    .connect(url,options)
    .then(()=> console.log(`connected`))
    .catch((err) => console.error(`connection error: ${err}`));