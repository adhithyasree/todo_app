const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// GET TASKS
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// ADD TASK
app.post("/tasks", (req, res) => {
  const { title, description, priority, due_date, completed } = req.body;
  const sql =
    "INSERT INTO tasks (title, description, priority, due_date, completed) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [title, description, priority, due_date, completed],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(result);
      }
    }
  );
});

// UPDATE TASK
app.put("/tasks/:id", (req, res) => {
  const { completed } = req.body;
  const sql = "UPDATE tasks SET completed=? WHERE id=?";

  db.query(
    sql,
    [completed ? 1 : 0, req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.json(result);
      }
    }
  );
});

// DELETE TASK
app.delete("/tasks/:id", (req, res) => {
  const sql = "DELETE FROM tasks WHERE id=?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
