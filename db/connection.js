const mongoose = require('mongoose');

mongoose.Promise = Promise;

// set the uri for connecting to our local mongodb

const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL
		: 'mongodb://localhost/tasks';

// connect to the database, with the imported mongoose instance
mongoose
	.connect(mongoURI, { useNewUrlParser: true })
	.then((instance) =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	.catch((error) => console.log('Connection failed!', error));



module.exports = mongoose;
