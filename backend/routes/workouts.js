const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;
