const express = require("express");
const UsersModel = require("../models/users");

const router = express.Router();

// get all customers from sample_analytics db
router.get("/getUsers", async (req, res) => {
  try {
    const users = await UsersModel.find({}, "username name");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get a customers from sample_analytics db
router.get("getUser/:id", (req, res) => {});

module.exports = router;
