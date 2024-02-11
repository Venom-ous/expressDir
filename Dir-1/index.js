const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app is listening to ${port}`);
});

// app.use((req, res)=> {
//     console.log("request received");
// });

app.get("/", (req, res) => {
    res.send("you have contacted root path")
});

app.get("/bla", (req, res) => {
    res.send("you have contacted search path")
});

app.get("/profile", (req, res) => {
    res.send("you have contacted profile path")
});

// app.get("/:username", (req, res) =>{
//     res.send("USERNAME ACCEPTED");
// });

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`these are the search results of query ${q}`)
});