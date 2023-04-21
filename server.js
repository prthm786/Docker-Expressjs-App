const express = require("express")
const port = 5000

const log = console.log
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
    log(`Server listening on ${port}`)
})
