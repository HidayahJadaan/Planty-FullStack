const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

// DATABSE
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "plantidb",
});

// Route
app.post("/register", (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  const SQL = "INSERT INTO users (email, username, password) VALUES (?,?,?)";
  const values = [sentEmail, sentUserName, sentPassword];

  db.query(SQL, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: "Error creating user", error: err.message });
    }
    else {
      console.log("User Inserted Successfully");

      res.send({ message: "User Added Successfully" });
    }
  });
});

app.post("/login", (req, res) => {
  const sentLoginEmail = req.body.LoginEmail;
  const sentLoginPassword = req.body.LoginPassword;

  const SQL = "SELECT * FROM users WHERE email = ? && password = ?";
  const values = [sentLoginEmail, sentLoginPassword];

  db.query(SQL, values, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: "Incorrect Email Or Password" });
    }
  });
});
