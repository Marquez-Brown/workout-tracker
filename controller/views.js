const express = require("express");
const path = require("path");
const Router = express.Router();

// view the add exercise page
Router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// view for the stats page
Router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//export Router
module.exports = Router;