const express = require("express");
const UsersModel = require("../models/users");

const router = express.Router();

// get all customers from sample_analytics db
router.get("/getUsers", async (req, res) => {
  try {
    const users = await UsersModel.find({}, "name active email");
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// get a customers from sample_analytics db
router.get("/getUser/:id", getUserById, (req, res) => {
  return res.status(200).json(res.user);
});

// post a new entry
router.post("/postUser", async (req, res) => {
  console.log(req.body);
  const user = new UsersModel({
    name: req.body.name,
    active: req.body.active,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// delete a user
router.delete("/deleteUser/:id", getUserById, async (req, res) => {
  try {
    await res.user.remove();
    res.status(204).send({ message: "User deleted." });
  } catch (err) {
    res.status(500).send({ message: "Internal error." });
  }
});

async function getUserById(req, res, next) {
  let user;
  try {
    user = await UsersModel.findById(req.params.id);
    if (user === null) {
      return res
        .status(404)
        .json({ message: `No user found with provided id ${id}` });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
