const express = require("express");
const router = express.Router();
const {
  getAllToDos,
  createTodo,
  todosByPriority,
  updateToDos,
  deleteToDo,
} = require("../controller/todoController.js");
const ToDo = require("../model/ToDo.js");

router.get("/all-todos", getAllToDos);
router.post("/new-todo", createTodo);
router.get("/get-all-todo/:priority", todosByPriority);
router.put("/update-todo/:id", updateToDos);
router.delete("/delete-todo/:id", deleteToDo);

module.exports = router;
