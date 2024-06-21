const express = require('express');
const app = express()

// app.use((req, res) => {
//     console.log("We got a request");
//     res.send("<h1>We got your request hurrayyy</h1>");


// });

app.get("/cat", (req, res) => {
    console.log("Cat Request");
    res.send("<h2>Meow!!!!!!!</h2>")
});

app.get("/dog", (req, res) => {
    //console.log("Dog Request");
    res.send("<h2>Bowww!!!!!!!</h2>")
});

app.get("/", (req, res) => {
    res.send("<h2>Pradyumna's Home Page!!!!!!! Noooo</h2>")
});

app.post("/cat", (req, res) => {
    res.send("<h2>Cat's Home Page!!!!!!!</h2>")
});


app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h2>This is the ${subreddit} page</h2>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h2>This is the ${postId} in ${subreddit} page</h2>`);
});

app.get("/search", (req, res) => {
    const { q } = req.query;
    res.send(`<h2>This is the result for ${q}</h2>`);
});

app.get("*", (req, res) => {
    res.send("<h2>This is the default page</h2>")
});

app.listen(3000, () => {
    console.log("Listening on port 3000!!!!");
})