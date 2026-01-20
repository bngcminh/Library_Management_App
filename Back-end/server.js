require('dotenv').config();

// Cac thu vien can thiet
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

// HTTP logger
app.use(morgan('combined'));

// Cau hinh cac thu muc tinh
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../Front-end/Views'));

// app.set(express.static(path.join(__dirname,'../Front-end/Public')));
app.use(express.static(path.join(__dirname,'../Front-end/Public')));

app.get('/', (req, res) => {
    return res.render('home');
})

app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}/`)
})