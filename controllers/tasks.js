const express = require('express');
const Task = require('../models/Task');

const router = express.Router();




router.get('/', (req, res) => {
	Task.find({}).then((task) => res.json(task));
});







router.post('/', (req, res) => {
    let newTask= req.body;
  
    console.log(newTask);
  
    Task.create(newTask).then(() => {
      res.json(newTask);
    });
  });






  router.delete("/:id", (req, res) => {
    newTask.findOneAndDelete({ title: req.params.id }).then(
      (deletedTask) => {
        res.json(deletedTask);
      }
    );
  });

module.exports = router;