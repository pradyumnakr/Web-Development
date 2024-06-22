const express = require('express');
const app = express()
const path = require('path');
const reditdata = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("randomval", { num });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = reditdata[subreddit];
    if (data) {
        res.render('subreddit', { ...data })
    } else {
        res.render("notfound", { subreddit });
    }

});

app.get('/cats', (req, res) => {
    const cats = ['maala', 'munni', 'kachku']
    res.render("cats", { cats });
});




app.listen(3000, () => {
    console.log("Listening Port number 3000");
});