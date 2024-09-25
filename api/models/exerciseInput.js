const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const exerciseInputSchema = new Schema({
  exerciseName: { type: String, required: true },
  set: { type: Number, required: true },
  reps: { type: Number, required: true },
});

const exerciseInputModel = model("exerciseInput", exerciseInputSchema);
module.exports = exerciseInputModel;
