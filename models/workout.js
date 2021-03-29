const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an excercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            duration: {
                type: Number,
                required: "Enter the duration"
            },
            distance: {
                type: Number,
                required: "Enter the distance covered"
            },
            weight: {
                type: Number,
                required: "Enter the weight"
            },
            reps: {
                type: Number,
                required: "Enter the amount of reps"
            },
            sets: {
                type: Number,
                required: "Enter the number of sets"
            },
        }
    ],
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;