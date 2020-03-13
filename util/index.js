const pathUtil = require('./path');
const fs = require('fs');

const getFileName = () => {
	const time = new Date();
	const d = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
	return `${pathUtil.getRootDirectory()}\\${d}.json`;
};

const readFileAsJson = fileName => {
	const jsonString = fs.readFileSync(fileName, 'utf8');
	return JSON.parse(jsonString);
};

exports.addUserEvents = ({ userId, newEvents }) => {
	const fileName = getFileName(),
		users = readFileAsJson(fileName),
		user = users[userId];
	user.events = [...user.events, ...Object.values(newEvents)];
	fs.writeFileSync(fileName, JSON.stringify(users));
};
