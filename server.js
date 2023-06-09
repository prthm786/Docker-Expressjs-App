const express = require("express")
const {appendFileSync} = require("fs")
const port = 5000

const log = console.log

# Creating express app 
const app = express()

# Middleware 
app.use((req, res, next) => {
    appendFileSync("./logs.txt", `IP: ${req.id} \nUrl: ${req.url} \nMethod: ${req.method}`)

    next()
})

# Get request handler 
app.get("/", (req, res) => {
    res.send("Welcome to myNodejsApp")
})

# Handles Errors 
app.get("*", (req, res) => {
    res.send("Error 404 : Page Not Found")
})

app.listen(port, () => {
    log(`Server listening on ${port}`)
})
