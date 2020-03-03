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

router.use('/events',events);

exports.router = router;