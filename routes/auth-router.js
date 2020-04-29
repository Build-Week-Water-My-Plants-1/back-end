const bcrypt = require('bcryptjs');
const router = require('express').Router();

const Users = require('../models/users-model.js');
const { generateToken } = require("../middleware/generateToken");

router.post("/register", (req, res) => {
    let user = req.body;
    if (!user.username) {
        res.status(400).json({messsage: "Please include the username." })
      }
      if (!user.password) {
        res.status(400).json({messsage: "Please include the password." })
      }
      if (!user.phone_number) {
        res.status(400).json({messsage: "Please include the phone number." })
      }
    if (user.username && user.password) {
      const hash = bcrypt.hashSync(user.password, 14);
      user.password = hash;
      
      Users.add(user)
        .then(user => {
          console.log(user)
          res.status(200).json({ message: "User registration successful.", id: user.id, username: user.username });
        })
        .catch(err => res.status(500).json({ errorMessage: "Error Registering User", err }))
    } else {
      res.status(400).json({ errorMessage: "Please include username, password and phone_number" });
    }
  });
  
router.post('/login', (req, res) => {
  let { username, password } = req.body;
  
  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ id: user.id, username: user.username, token: token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

module.exports = router;