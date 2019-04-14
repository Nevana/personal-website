const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443

app.use('/assets', express.static(__dirname + '/assets'))

let key = fs.readFileSync(__dirname + '/ssl/www_timharpe_me.key');
let cert = fs.readFileSync(__dirname + '/ssl/www_timharpe_me.csr');
let options = {
    key: key,
    cert: cert
}


//default Page
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/views/index.html')
})

let server = https.createServer(options, app)
server.listen(port, function(){
    console.log(`server running at https://ip:${port}/`)
});


//app.listen(port, () => console.log(`Example app listening on port ${port}!`))