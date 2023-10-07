const express = require('express');
const { getCharById } = require('./controllers/getCharById');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
server.get('/character/:id', getCharById)



// const http = require ("http");
// const {getCharById} = require("./controllers/getCharById")



// http.createServer((request, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     if(request.url.includes("/rickandmorty/character/")){
      
//       const id= request.url.split("/").at(-1);
//       getCharById(response, id)
//     }
     

//     }
     
    

//   )
//   .listen(3001, "127.0.0.1")
    

