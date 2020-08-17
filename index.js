// Set up express, controller, app
const express = require('express');
const taskController = require('./controllers/tasks');
const app = express();
const cors = require('cors');

// Instantiate App with cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskController);

app.listen(8080, () => console.log('Tern is running on 8080!'));
