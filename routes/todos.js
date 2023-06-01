const todoRouter = require("./routes/todos");
app.use("/todos", todoRouter);

router.get("/", function (req, res, next) {
  res.send("respond with a recource");
});
