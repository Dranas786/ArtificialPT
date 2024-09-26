const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { exerciseInput, exerciseOutput } = require("./models/exerciseInput.js");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(require("body-parser").json());
app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("/api/exercises", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { exerciseName, set, reps } = req.body;
  const exercise1 = await exerciseOutput.find(
    {
      ExerciseName: exerciseName,
      Set: set,
      Reps: reps,
    },
    null,
    { limit: 1 }
  );
  const exerciseinput = await exerciseInput.create({
    exerciseName,
    set,
    reps,
    Difficulty: exercise1[0].Difficulty,
    MuscleGroup: exercise1[0].MuscleGroup,
    Score: exercise1[0].Score,
  });
  res.json(exerciseinput);
});

app.get("/api/exercise", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);

  //   const exercise1 = await exerciseOutput.find(
  //     {
  //       ExerciseName: exerciseName,
  //       Set: set,
  //       Reps: reps,
  //     },
  //     null,
  //     { limit: 1 }
  //   );
  const exercise2 = await exerciseInput.find();
  //   console.log(exerciseName);
  res.json(exercise2);
});

app.listen(4000);
