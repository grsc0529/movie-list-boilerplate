const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('../db');


app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

