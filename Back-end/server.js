require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello word');
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`);
});