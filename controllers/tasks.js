// Set up controller

const express = require('express');
const Task = require('../db/models/Task.js');

const router = express.Router();

// GET Route
router.get('/', (req, res) => {
	Task.find({}).then((task) => res.json(task));
});

// POST Route
router.post('/', (req, res) => {
	let newTask = req.body;

	console.log(newTask);

	Task.create(newTask).then(() => {
		res.json(newTask);
	});
});

// PUT Route
router.put(`/:id`, (req, res) => {
	Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then((newTask) => {
			Task.find({}).then((task) => res.json(task));
		})
		.catch(console.error);
});

// DELETE Route
router.delete(`/:id`, (req, res) => {
	Task.findOneAndDelete({ _id: req.params.id })
		.then((deletedTask) => {
			Task.find({}).then((task) => res.json(task));
		})
		.catch(console.error);
});

module.exports = router;
