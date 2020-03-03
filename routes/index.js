const express = require("express"),
  router = express.Router(),
  path = require("path"),
  pathUtil = require("../util/path"),
  events = require('./events');

router.get("/", (request, response, next) => {
  response
    .status(200)
    .sendFile(
      path.join(
        pathUtil.getRootDirectory(),
        "client",
        "build",
        "index.html"
      )
    );
});

router.get("/user",(request,response,next) => {
	const date = new Date();
	const user = {
		id : `user_${date.getTime()}`
	}
	response.status(200).send(user);
});

router.use('/events',events);

exports.router = router;