const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
// const { createToken, authenticateUser, authMiddleware } = require("./auth");
// const User = require("./models/user");
// const authentication = require("./authorization");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// // get all Videos
app.get("/getUsers", async (req, res) => {
  try {
    const allPrograms = await pool.query("SELECT * from users");
    res.json(allPrograms.rows);
  } catch (error) {
    console.log(error.message);
  }
});


// Register a user
// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = new User(name, password, email);
//     await user.emailExists({ email });
//     await user.save();
//     const token = createToken(user);
//     res.json({ token });
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// Login a user
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await authenticateUser(email, password);
//     const token = createToken(user);
//     res.json({ token });
//   } catch (err) {
//     console.log(err.message);
//   }
// });


// get all items
// app.get("/items", async (req, res) => {
//   try {
//     const orderBy = req.query.orderBy;
//     let allItems = await pool.query("SELECT * from items");
//     if (orderBy !== null && orderBy != undefined) {
//       allItems = await pool.query(
//         `SELECT * from items order by ${orderBy} desc`
//       );
//     }
//     res.json(allItems.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// // verify is json web token is not fake
// app.get("/verify", authentication, async (req, res) => {
//   try {
//     res.json(true);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send("Server Error");
//   }
// });

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});

//create a todo
// app.post("/todos", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO todo (description) VALUES($1) RETURNING *",
//       [description]
//     );
//     res.json(newTodo.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// //get a specific todo
// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * from todo WHERE todo_id = $1", [
//       id,
//     ]);
//     res.json(todo.rows[0]);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// //update a todo
// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const update = await pool.query(
//       "UPDATE todo SET description = $1 where todo_id = $2",
//       [description, id]
//     );
//     res.json("Todo was updated");
//   } catch (error) {
//     console.log(error.message);
//   }
// });
// //delete a todo
// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = await pool.query("DELETE from todo WHERE todo_id = $1", [
//       id,
//     ]);
//     res.json("Todo was Deleted");
//   } catch (error) {
//     console.log(error.message);
//   }
// });
