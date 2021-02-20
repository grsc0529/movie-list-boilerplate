//import dependencies that are needed to make the server side run
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

//where are we working?
//USE PATH to point to our static directory! 

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
console.log('PUBLIC_DIR file path name: ', PUBLIC_DIR);


//invoke all libraries 
//use express .use with the static files located to point the server to the static files
app.use(express.static(PUBLIC_DIR));
app.use(morgan);
//THERE IS SOMETHING ABOUT JSON HERE... What is that?

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Movie List server is listening at http://localhost:${port}`)
})