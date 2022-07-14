const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

const gifs = [
    {
        gif_link: "https://media1.giphy.com/media/2D8g2rXcWx1DO/200w.webp?cid=ecf05e47bep5nyxsj7nmzxgivvkco5xhdytdgxxgy1wxmsnr&rid=200w.webp&ct=g"
    },
    {
        gif_link: "https://media3.giphy.com/media/7kn27lnYSAE9O/200.webp?cid=ecf05e47bep5nyxsj7nmzxgivvkco5xhdytdgxxgy1wxmsnr&rid=200.webp&ct=g"
    }
]

app.get("/", (req, res) => {
    res.render("index", {gifs})
})

app.listen(3000, () => {
    console.log("Giphy clone listening on port 3000")
})