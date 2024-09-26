const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const exerciseInputSchema = new Schema({
  exerciseName: { type: String, required: true },
  set: { type: Number, required: true },
  reps: { type: Number, required: true },
  Difficulty: { type: String, required: true },
  MuscleGroup: { type: String, required: true },
  Score: { type: Number, required: true },
});

const exerciseOutputSchema = new Schema({
  Difficulty: { type: String, required: true },
  ExerciseName: { type: String, required: true },
  MuscleGroup: { type: String, required: true },
  Reps: { type: Number, required: true },
  Score: { type: Number, required: true },
  Set: { type: Number, required: true },
});

const exerciseInput = model("exerciseInput", exerciseInputSchema);
const exerciseOutput = model("raitings", exerciseOutputSchema);

module.exports = { exerciseInput, exerciseOutput };
