const express = require("express")
const app = express()
const giphy = require("giphy-api")
const Giphy = giphy()
const config = require("./config")
const fetch = require("node-fetch")
const bodyParser = require("body-parser")

const apiConnection = `https://api.giphy.com/v1/gifs/search?api_key=${config.apiKey}`

const apiIndexConnection = `https://api.giphy.com/v1/gifs/trending?api_key=${config.apiKey}&limit=50&weirdness=4&offset=${50}`

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", async (req, res) => {
    const gifs = await fetch(apiIndexConnection).then(res => res.json())
    res.render("index", {gifs})
})

app.post("/", async (req, res) => {
    const gifs = await fetch(`${apiConnection}&q=${req.body.search}&limit=25`).then(res => res.json())
    res.render("index", {gifs})
})


app.listen(3000, async () => {
    console.log("Giphy clone listening on port 3000")
})