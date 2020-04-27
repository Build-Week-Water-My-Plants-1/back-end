const db = require("../models/users-model")

module.exports = (req, res, next) => {
  const { id } = req.params

  db.findById(id)
    .then((user) => {
      if (user) {
      next()
      } else {
        res.status(404).json({ message: "invalid id" })
      }
    })
    .catch(() => {
      res.status(500).json({ error: "Error, unable to retrieve information" })
  })
}