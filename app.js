const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	res.send('Hellow world! how are you');
});

app.listen(port, ()=> {
	console.log(`Example app listening at http://${port}`)
});
