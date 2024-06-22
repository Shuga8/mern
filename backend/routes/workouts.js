const express = require("express");
const {
  createWorkout,
  getWorkouts,
  singleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

/**
 * Middleware
 * @param requireAuth
 */
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getWorkouts);

router.get("/:id", singleWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
