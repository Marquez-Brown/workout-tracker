const express = require("express");
const mongoose = require("mongoose");
const workoutController = require("./Develop/controller/workoutController.js");
const app = express();


const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(workoutController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});