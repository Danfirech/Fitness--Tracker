const { model, Schema } = require("mongoose");

let WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

let Workout = model("workout", WorkoutSchema);

module.exports = Workout;
