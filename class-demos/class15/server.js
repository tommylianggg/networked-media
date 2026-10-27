const express = require('express');
/************
 * import our templating library
 ************/
const nunjucks = require('nunjucks');

//app is the server
const app = express();

// all css and front-end js will go in public folder
// settings
// telling server all front-end go into public folder
app.use(express.static('public'));
// allows us to use request.body
// need this line if have app.post
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
// more settings for njk files
// views folder will have all njk files
nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');

let allData = []

// render always go inside app.get or post
app.get('/', (request, response)=>{
    // response.render accepts 2 parameters:
    // 1: the name of the njk file
    // 2: a javascript object. the properties you pass into this object are the variables that you use in the .njk files
            // serverData is the name of the variable we used in baseLayout.njk
    response.render('home.njk')
})
app.get('/form', (request, response)=>{
    response.render('form.njk')
})
app.get('/viewall', (request, response)=>{
    //optional second param
    // needs to be an object
    response.render('viewall.njk', { messageArray: allData })
})
// every form needs an app.post
app.post('/send-message', (request, response)=>{
    // this action will handle storing client data from the form in allData array
    console.log(request.body);
    allData.push(request.body);
    // redirect to where the data we want to be displayed
    response.redirect('/viewall')
})

app.listen(8080, ()=>{
    // to run the server:
    // 1. make sure you are in the correct folder
            // if you type pwd it should print out the path to class_14_demo
            // if it does not show class_14_demo, you need to navigate to the folder using cd
    // 2. in terminal use the starting command: node --watch server.js 
            // another way to do this is to add a script in package.json (go to that file and look at line 8)
    console.log('http://localhost:8080')
}) 