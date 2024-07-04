const express = require('express');
const app = express();
const stay = require('./routes/stay');

app.use('/shelters', stay);

app.listen(3000, () => {
    console.log('Serving app...')
})