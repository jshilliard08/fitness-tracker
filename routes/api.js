const router = require("express").Router();
const { query } = require("express");
const Workout = require("/models/workout");

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

  // look up .aggregate for mongoose in order to get duration

  router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(params.id,
      { $push: { exercises: body } },
      // { new: true } 
      )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // look up .aggregate for mongoose in order to get duration range 

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([ { $addFields: { totalDuration: { $sum: "$exercises.duration" } } } ]) 
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  })

  //Delete workout

  router.delete("/api/workouts", ({ body }, res) => {
    Workout.findbyIdAndDelete(body.id)
      .then(() => {
        return res.json(true);
      })
      .catch((err) => {
        res.json(400).json(err);
      });
  });
  
  module.exports = router;
  