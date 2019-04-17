# peronal-website
simple version of my personal website based on nodejs &amp; express &amp; docker
# Get started
* Clone the repository to you server

* navigate into the directory

* install nodejs

* if your are in the root directory of your download type "npm install" for dependencies

* generate a ssl certificate

    * copy the two files to "src/assets/ssl/"
    * modify in server.js  `let key = fs.readFileSync(__dirname + '/your/key/path/key.key');`
    * and in server.js `let cert = fs.readFileSync(__dirname + '/your/csr/path/csr.csr');`

* start the server with "npm start"
