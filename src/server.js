const express = require('express')
const fs = require('fs')
const app = express()
const port = 8080

app.use('/assets', express.static(__dirname + '/assets'))

//default Page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

//start the server
app.listen(port, function () {
    console.log(`server running at https://ip:${port}/`)
});