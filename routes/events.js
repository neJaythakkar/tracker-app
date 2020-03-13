const express = require('express'),
	router = express.Router(),
	addUserEvents = require('../util').addUserEvents;

router.get('/', async (request, response, next) => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos');
	const json = await data.json();
	return response.status(200).json(json);
});

router.post('/', async (request, response, next) => {
	const { userId, events } = request.body;
	addUserEvents({ userId, newEvents: events });
	response.status(200).send('events posted successfully');
});
module.exports = router;
