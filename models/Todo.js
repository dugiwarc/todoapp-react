const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  date: {
    type: Date,
    default: Date.now
  },
  task: [
    {
      title: {
        type: String,
        required: true
      },
      isCompleted: {
        type: Boolean,
        default: false
      }
    }
  ]
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
