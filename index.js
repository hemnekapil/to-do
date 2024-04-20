const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

// Enable express.json() middleware to parse JSON bodies
app.use(express.json());

// A simple example route
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputes",
    });
    return;
  }
  todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", (req, res) => {
  const todos = todo.find({});

  res.json({
    todos,
  });
});
app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputes",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
