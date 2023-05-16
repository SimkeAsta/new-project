const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/posts", (req, res) => {
  dbConnection.execute(`SELECT * FROM posts`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/posts", (req, res) => {
  const { title, text, image } = req.body;

  const postQuery = "INSERT INTO posts (title, text, image) VALUES (?, ?, ?)";

  dbConnection.execute(postQuery, [title, text, image], (err, result) => {
    defaultCallback(err, result, res);
  });
});

module.exports = router;
