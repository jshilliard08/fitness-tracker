const router = require("express").Router();
const { query } = require("express");
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//Get workout by ID

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([ { $addFields: { totalDuration: { $sum: "$exercises.duration" } } } ])  
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  })