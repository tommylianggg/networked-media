let express = require('express')
let nedb = require('@seald-io/nedb')

// setup variables to use libraries
let app = express()
let database = new nedb({filename: "mydatabase.db", autoload: true})

// setup server normally
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response)=>{
    response.send('server is working yay')
})

app.post('/add-data', (request, response)=>{
    console.log(request.body)
    let dataToAdd = {
        message: request.body.someMessages,
        timestamp: Date.now()
    }
    //add to database
    database.insert(dataToAdd, (error, newData)=>{
        if(error){
            console.log(error)
            response.send('data was not added awww')
        } else{
            console.log(newData)
            response.send('data added successfully woohoo')
        }
    })
})

app.get('/get-data', (request, response)=>{
    let query = {}
    database.find(query, (error, retrievedData)=>{
        console.log(retrievedData)
        response.json(retrievedData)
    })
})

app.listen(6001, ()=>{
    console.log('server is running on http://localhost:6001/')
})