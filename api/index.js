const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseInput = require("./models/exerciseInput.js");
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
  const exerciseinput = await exerciseInput.create({ exerciseName, set, reps });
  res.json(exerciseinput);
});

app.listen(4000);
