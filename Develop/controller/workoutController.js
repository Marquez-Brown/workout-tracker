const express = require("express");
const Router = express.router();
const Workout = require("../model/models/Workout");

//require dependencies & create router instance
const express = require("express");
const Router = express.Router();
const Workout = require("../models/Workout");

// GET route for all workouts
Router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then((allWorkouts) => {
            res.json(allWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });
});

// POST route for a new workout
Router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// PUT route for creating a new workout or updating one
Router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndUpdate(
        id,
        {
            $push: { exercises: req.body },
        },
        { new: true }
    )
        .then((updatedWorkout) => {
            res.json(updatedWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// GET route to find last 7 workouts
Router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            res.json(err);
        });
});


module.exports = Router;