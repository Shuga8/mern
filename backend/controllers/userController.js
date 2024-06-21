const User = require("../models/UserModel");

// login
const loginUser = async (req, res) => {
  res.json({ message: "loign user" });
};

// signup
const signupUser = async (req, res) => {
  res.json({ message: "loign user" });
};

modules.exports = { signupUser, loginUser };
