//client' request -> (server)app.js -> router -> controller -> model (database)-> controller -> client response

const ToDo = require("../model/ToDo");

const getAllToDos = async (req, res) => {
  try {
    const todos = await ToDo.find({});
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).jon({ success: false, message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = await new ToDo(req.body);
    const saveTodo = await newTodo.save();
    res.status(200).json({ success: true, data: saveTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const todosByPriority = async (req, res) => {
  const priority = req.params.priority;
  const todo = await ToDo.find({ priority: priority });
  try {
    if (!todo)
      return res
        .status(400)
        .json({ success: false, messaage: "todo not found" });
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.messaage });
  }
};

const updateToDos = async (req, res) => {
  try {
    const updateToDO = await ToDo.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!updateToDO)
      return res
        .status(400)
        .json({ success: false, message: " todo not found" });
    res.status(200).json({ success: true, message: "updated content" });
  } catch (error) {
    res.staus(500).json({ success: false, message: error.message });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const deleteToDo = await ToDo.findOneAndDelete({ _id: req.params.id });
    if (!deleteToDo)
      return res
        .status(400)
        .json({ success: false, message: "todo not found" });
    res.status(200).json({ success: true, data: deleteToDo });
  } catch (error) {
    res.status(500).json({ success: false, message: ErrorEvent.messaage });
  }
};

module.exports = {
  getAllToDos,
  createTodo,
  todosByPriority,
  updateToDos,
  deleteToDo,
};
