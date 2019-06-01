const express = require("express");
const router = express.Router();
const middleware = require("../../middleware/middleware");

const Todo = require("../../models/Todo");

// @router GET api/todo/:id
// @desc Get todo by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    let todo = await Todo.findOne({ _id: req.params.id });
    if (todo) {
      return res.status(200).json({ todo });
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @router GET api/todo/
// @desc Get all todos
// @access Public
router.get("/", async (req, res) => {
  try {
    let todos = await Todo.find();
    if (todos) {
      return res.status(200).json({ todos });
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @router GET api/todo/
// @desc Delete todo
// @access Private
router.delete("/:id", middleware, async (req, res) => {
  try {
    await Todo.findOneAndDelete(req.params.id);
    return res.status(200).json({ msg: "todo deleted" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @router POST api/todos/
// @desc Create todo
// @access Public
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const todo = new Todo({ title });
    await todo.save();
    if (todo) {
      return res.status(200).json({ todo });
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @router UPDATE api/todo/
// @desc Update todo
// @access Private
router.put("/:id", middleware, async (req, res) => {
  try {
    const { task } = req.body;
    const updatedTodo = await Todo.findOne({ _id: req.params.id });
    updatedTodo.task = task;
    await updatedTodo.save();
    return res.status(200).json({ updatedTodo });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
