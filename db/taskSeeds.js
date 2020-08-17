const tasks = require('./tasks.json');
const Task = require('./models/Task');

Task.deleteMany({})
	.then(() => {
		return Task.insertMany(tasks);
	})
	.then(() => {
		console.log('seeded!');
		process.exit;
	});
