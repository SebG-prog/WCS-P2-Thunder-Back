const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const auth = require("./src/routes/auth")
const connection = require("./src/helper/db.js")
const favorite = require("./src/routes/favorite")
const ranking = require("./src/routes/ranking")
const register = require("./src/routes/register")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/auth", auth)
app.use("/favorite", favorite)
app.use("/ranking", ranking)
app.use("/register", register)

app.get("/", (req, res) => {
    res.send("je suis dans le /")
})

app.listen("4242", console.log("http://localhost:4242"))


