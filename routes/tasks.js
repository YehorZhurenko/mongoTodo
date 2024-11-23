const express = require('express');

const taskRouter = express.Router();
const {
  getAllTasks,
  getTask,
  deleteTask,
  createTask,
  updateTask,
} = require('../controllers/tasks');

taskRouter.route('/').get(getAllTasks).post(createTask);
taskRouter.route('/:id').get(getTask).delete(deleteTask).patch(updateTask);

module.exports = taskRouter;
