//get .env file
require('dotenv').config()
//set up mesto library
const m = require('mesto')
//url: our server
//our access server
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});
//function that make request to mestodon server
async function makeStatus(text) {
    //await make sure it gets it first
	const status = await masto.v1.statuses.create({
		status: text,
		visibility: 'private',
	});
}
setInterval(() => {
    //array
	let emoji = ['😭', '🤩', '💖'];
    //generate random number
	let rand = Math.floor(Math.random() * emoji.length);
    //get the number random select
	let post = emoji[rand];
    //do it
	makeStatus(post);
}, 5000); //happen every 5 seconds