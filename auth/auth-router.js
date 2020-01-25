const bcrypt = require("bcryptjs");
const router = require("express").Router();
const usersModel = require("../users/users-model");
const restricted = require("./authenticate-middleware");

router.post("/register", (req, res) => {
  // implement registration
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
