const User = require("../models/UserModel");

// login
const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

// signup
const signupUser = async (req, res) => {
  res.json({ message: "signup user" });
};

module.exports = { signupUser, loginUser };
