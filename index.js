  
const express = require("express"),
app = express(),
port = process.env.PORT || 5000,
bodyParser = require('body-parser'),
cors = require('cors'),
router = require('./routes/index').router;

app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.listen(port, () => console.log(`server listening on port ${port}`));