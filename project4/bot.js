// this builds off of class-18-demo
// we are adding the fetch request in our interval function

require('dotenv').config()

const m = require('masto')

const fs = require('fs')

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN,
});

function isSleeping() {
    let hour = new Date().getHours()
    if (hour >= 6 && hour < 13) {
        return true
    }
    return false
}

async function makeStatus(text) {
    const status = await masto.v1.statuses.create({
        status: text,
        // TODO: change visability to public when project ready to run
        visibility: 'public',
    });
}

let classmates = ['@Caitlyn', '@Elena', '@Anna', '@Jennifer', '@Mike', '@Salma', '@Tommy', '@Lisa', '@Yatong', '@Lam', '@Wing', '@Alessandra', '@May', '@Tess', '@Anita', '@Midori', '@Kiki']

setInterval(async () => {
    if (isSleeping()) {
        console.log('sleeping...')
        return
    }
    // TODO: ADD API REQUEST
    // change localhost to your partner's droplet IP (their server must be running)
    // if needed, change the port (6003) to match your partner's app.listen in *their* server.js
    let url = 'http://137.184.130.61:6003/get-data';

    let response = await fetch(url)
    let json = await response.json()
    // what do you want to do with your partner's data?
    //     it will use the json variable for any manipulation
    // console.log(json)
    // TODO: SELECT ITEM FROM JSON AND MANIPULATE IT FOR YOUR BOT
    //    the json is an array, so you will need to select a specific item from it 
    //    and whatever property you would like to access. 
    //    likely, you will need to test your partner's data and see how they format it
    let rand = Math.floor(Math.random() * json.length);
    let randclass = Math.floor(Math.random() * classmates.length);
    let student = classmates[randclass];
    let student2 = classmates[(randclass + 1) % classmates.length];
    let person = json[rand].user;
    let text = json[rand].text;
    let mainfood = json[rand].mainFood;
    let select = json[rand].selections;
    let utensil = json[rand].utensil;

    if (person == '') {
        person = '(I forgot who I am)'
    }
    if (text == '') {
        text = '(I forgot what I want to say)'
    }
    if (mainfood == undefined) {
        mainfood = 'no main food'
    }
    if (utensil == undefined) {
        utensil = '(hands I guess)'
    }

    let post1 = person + ' says: "' + text + '" ' + 'maybe use ' + utensil + ' to have ' + mainfood + ' and ' + select + '. ' + student + ' is cooking' + '\n' + student2 + ': "This recipe sounds weird, but the customer is always right. ' + student + ', do it quick!"'
    

    // make our status
    makeStatus(post1);

    // TODO: CHANGE 5000ms TO YOUR SPECIFIC INTERVAL
}, 30 * 60 * 1000);
