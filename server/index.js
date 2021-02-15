//What tools do we need to create our server connection?
const express = require('express'); //express is a node library
const path = require('path'); //path is a way to create easy paths to the files in your repo
const db = require('../db'); //import sequel connection

//Estanlish connection to PORT and directory to /public files 
const PORT = 3000; //|| process.env.PORT;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express(); //invoke express

//create middleware 
const loggingMiddleware = (req, res, next) => {
  var logStr = `${req.method} request coming from ${req.url}`;
  console.log(logStr);
  next();
}

//tell the app what it is going to use to create connections
app.use(loggingMiddleware);
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

//construct request methods 

app.get('/api/movieTable', (req, res) => {
  const sql = `SELECT * FROM movieTable`;
  db.query(sql, (err, movieData) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(movieData);
    }
  })
});

app.post('/api/movieTable', (req, res) => {
  const { movieTitle, watched, releaseYear, metascore, IMBDrating } = req.body;
  const sql = `
    INSERT INTO movieTable (movieTitle, watched, releaseYear, metascore, IMBDrating) VALUES (?, ?, ?, ?, ?)
    `;
    db.query(sql, [movieTitle, watched, releaseYear, metascore, IMBDrating], (err, movieData) => {
      if (err) {
        console.log(err);
        res.send(500);
      } else {
        res.send(201);
      }
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

 