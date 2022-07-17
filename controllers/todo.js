var todo = require('../models/todo.js');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getTodos: async (req, res, next) => {
    try {
      todo.find().then((response)=>{
        res.status(200).send(response);
      });
    } catch (e) {
      res.status(400).send(e)
    }
  },

  addTodos: async (req, res, next) => {
    try {
      const todoObj = {
        id: uuidv4(),
        name: req.body.name,
        dueDate: req.body.dueDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      todo.create(todoObj).then((response)=>{
        res.status(200).send('todo created successfully');
      })
    } catch (e) {
      res.status(400).send(e)
    }
  },

  updateTodos: async (req, res, next) => {
    try {
      todo.updateOne({id: req.body.id},{
        id: req.body.id,
        name: req.body.name,
        dueDate: req.body.dueDate,
        createdAt: req.body.createdAt,
        updatedAt: new Date(),
      }).then((response) => {
        res.status(200).send('todo updated');
      })
    } catch (e){
      res.status(400).send(e);
    }
  },

  deleteTodos: async (req, res, next) => {
    try {
      todo.deleteOne({ id: req.query.id }).then((response) => {
        res.status().send('todo deleted')
      })
    } catch (e) {
      res.status(400).send(e)
    }
  }
  
}