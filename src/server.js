const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443

app.use('/assets', express.static(__dirname + '/assets'))

//Set to your own keys!
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

//let server list on on $port
let server = https.createServer(options, app)
server.listen(port, function(){
    console.log(`server running at https://ip:${port}/`)
});