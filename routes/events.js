const express = require('express'),
	router = express.Router(),
	fs = require('fs');
pathUtil = require('../util/path');

router.get('/', async (request, response, next) => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos');
	const json = await data.json();
	return response.status(200).json(json);
});

router.post('/', async (request, response, next) => {
	const body = request.body;
	const time = new Date();
	const d = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
	const userEvents = Object.values(body);
	const fileName = `${pathUtil.getRootDirectory()}\\${d}.json`;

	if (!fs.existsSync(fileName)) fs.writeFileSync(fileName,JSON.stringify(userEvents));
	else {
		const events = fs.readFileSync(fileName,'utf8')
		const parsedEvents = JSON.parse(events);
		parsedEvents.concat(userEvents);
		fs.writeFileSync(fileName,JSON.stringify(userEvents));
	};

	response.status(200).send("events posted successfully");
});
module.exports = router;
