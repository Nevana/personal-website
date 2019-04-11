const express = require('express')
const app = new express()
const port = 3000
const fs = require('fs')

app.use('/assets', express.static(__dirname + '/assets'))

//default Page
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))