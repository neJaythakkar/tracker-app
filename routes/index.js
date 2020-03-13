const express = require('express'),
	router = express.Router(),
	path = require('path'),
	pathUtil = require('../util/path'),
	events = require('./events')
	fs = require('fs');

router.get('/', (request, response, next) => {
	response
		.status(200)
		.sendFile(
			path.join(pathUtil.getRootDirectory(), 'client', 'build', 'index.html')
		);
});

router.post('/user', (request, response, next) => {
	const { userAgent, ipAddress, siteUrl } = request.body;
	const date = new Date();
	const time = new Date();
	const d = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
	const fileName = `${pathUtil.getRootDirectory()}\\${d}.json`;
	const newUser = {
		id: `user_${date.getTime()}`,
		userAgent,
		ipAddress,
		siteUrl,
		serverversion:"0.1.0",
		events:[]
	};
	if (!fs.existsSync(fileName)) fs.writeFileSync(fileName,JSON.stringify({[newUser.id]:newUser}));
	else {
		const usersJson = fs.readFileSync(fileName,'utf8')
		let parsedUsers = JSON.parse(usersJson);
		parsedUsers = {...parsedUsers,[newUser.id]:newUser};
		fs.writeFileSync(fileName,JSON.stringify(parsedUsers));
	};
	response.status(200).send(newUser);
});

router.use('/events', events);

exports.router = router;
