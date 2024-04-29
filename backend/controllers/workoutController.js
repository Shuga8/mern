const Workout = require("../models/WorkoutModel");

/** Create workout */
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });

    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
};
