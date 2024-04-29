const express = require("express");
const Workout = require("../models/WorkoutModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create();
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

  res.json({ msg: "POST a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
