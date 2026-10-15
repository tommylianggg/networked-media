const express = require('express');
//initiallize application
const app = express();
app.use(express.static('public'));
//allow to access body of a post request
app.use(express.urlencoded({ extended: true}));
//rouets - all of the url pages we want accessible
app.get('/', (request, response)=>{
    //response will contain all info we send back from server to user
    console.log('received a request at / route')
    //always need to respond or page will continue loading
    response.send("some info here")
})

app.get('/first-server', (request, response)=> {
    //send infor too the client that made request to server
    response.send('this is my first server')
} );

app.post('/form-upload', (request, response)=> {
    //retrieve the data from the body
    console.log(request.body)
    //send client to a different route
    response.redirect('/')
} );

app.listen(8080, ()=>{
    console.log('server restarted')
    console.log('http://127.0.0.1:8080/')
} )
//to refresh (restart) server: control c+ node server.js