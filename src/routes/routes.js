const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controllers')


router.get('/',  controllers.getAllTasks);
router.get('/:id', controllers.getTaskById);
router.post('/',  controllers.createTask);
router.put('/:id', controllers.updateTask);
router.delete('/:id', controllers.deleteTask);

module.exports = router;


