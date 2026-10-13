const express = require('express');
//initiallize application
const app = express();
app.use(express.static('public'));
//allow to access body of a post request
app.use(express.urlencoded({ extended: true}));
app.get('/first-server', (request, response)=> {
    //send infor too the client that made request to server
    response.send('this is my first server')
} );
app.listen(8080, ()=>{
    console.log('http://127.0.0.1:8080/')
} )