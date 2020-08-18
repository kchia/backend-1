const mongoose = require('../connection');

const TaskSchema = mongoose.Schema({
	title: String,
	body: String,
	createdDate: String,
	priority: Number,
	completed: Boolean,
	completedDate: Date,
	dueDate: String,
});

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;
