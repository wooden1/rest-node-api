'use strict';
// call to http
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.get('/api/contacts', (request, response) => {
  if(!contacts){
    response.status(404).json({message: 'No contacts found'});
  }
  response.json(contacts);
});
app.get('/api/contacts/:id', (request, response)=>{
  const requestId = request.params.id;
  let contact = contacts.filter(contact =>{
    return contact.id = requestId;
  });
});
const hostname = 'localhost';
const port = 3001;
//
// // starting a server
//  const server = http.createServer((request, response) =>{
//    // 200 is the code for good request
//    response.statusCode = 200;
//    // content getting served
//    response.setHeader('Content-Type', 'text/html');
//    response.send('');
//  });

 app.listen(port, hostname, () =>{
   console.log(`Server is running at http://${hostname}:${port}`);
 });
