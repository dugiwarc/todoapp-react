const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  }
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
