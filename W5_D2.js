const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Read the database
const db = require('./db.json');

// GET endpoint to fetch all users
app.get('/users', (req, res) => {
  res.json(db.users);
});

// POST endpoint to add a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = db.users.length + 1;
  db.users.push(newUser);
  res.json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//http://localhost:3000/users