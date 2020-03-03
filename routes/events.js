const express = require('express'),
   		router = express.Router();

router.get('/',async (request ,response , next) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await data.json()
    return response.status(200).json(json);
});

router.post('/',async (request ,response , next) => {
	console.log(request.body);
})
module.exports = router;