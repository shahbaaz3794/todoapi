var express = require('express');
var router = express.Router();
var todoController = require('../controller/todo.js')

/* GET users listing. */
router.get('/',todoController.getTodos);
router.get('/add-todos',todoController.addTodos);
router.get('/update-todos',todoController.updateTodos);
router.get('/delete-todos/:id',todoController.deleteTodos);

module.exports = router;
