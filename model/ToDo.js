const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

/*

1. Inside the models folder, create a new file called Todo.js. This file will contain the code for your todo model.
2. Create a todo model using the todoSchema and export out the Model.
3. Inside the routes folder, create a new file called todos.js. This file will contain the code for your todo router.
4. In your todos.js, add needed code to make routes. (Don't need to make routes yet but remember the requires and exports
5. Open your app.js  and add the following code to import and use the todo router:

*/

const toDoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: ["LOW", "MEDIUM", "HIGH"] },
  default: "MEDIUM",
  completed: { type: Boolean, default: false },
  completedAt: { type: Date, default: Date.now },
});

const ToDo = mongoose.model("todos", toDoSchema);
module.exports = ToDo;
