'use strict';
const express = require('express');
const server = express();
const PORT= process.env.PORT || 5555;

server.get ('/test', (request, response) => {
    response.send('working!!!');
});
server.listen(PORT,()=>{
    console.log("listen on port 5500");
});
server.use(express.static('./public'));