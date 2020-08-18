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

// Original port
// app.listen(8080, () => console.log('Tern is running on 8080!'));

// Modified port for Heroku/Atlas
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
