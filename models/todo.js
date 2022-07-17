const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: { type: String, required: true },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
},);

module.exports = mongoose.model('todo', todoSchema);;