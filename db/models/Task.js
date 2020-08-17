const mongoose = require('../connection');

const TaskSchema = mongoose.Schema({
	title: String,
	body: String,
	dueDate: Date,
	createdDate: Date,
	priority: Number,
});

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;
