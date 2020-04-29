const express = require('express');
const router = express.Router();

const Plants = require('../models/plants-model.js');
const validateUserId = require('../middleware/validate-userid.js');

//GET
router.get('/:id/plants', validateUserId, (req, res, next) => {
  Plants.find(req.params.id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id/plants/:plantId', validateUserId, (req, res, next) => {
  Plants.findById(req.params.plantId)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      next(err);
    });
});

//POST
router.post('/:id/plants', validateUserId, (req, res) => {
  let plant = req.body;
  if (!plant.common_name) {
    res.status(400).json({messsage: "Please include the plant common_name." })
  }
  if (!plant.scientific_name) {
    res.status(400).json({messsage: "Please include the plant scientific_name." })
  }
  if (!plant.h2o_frequency) {
    res.status(400).json({messsage: "Please include the plant h2o_frequency." })
  }
  Plants.insert({ ...req.body })
    .then((newPlant) => {
      res.status(201).json(newPlant);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: 'Error, failed to create new plant' });
    });
});

//PUT
router.put('/:id/plants/:plantId', validateUserId, (req, res, next) => {
  Plants.update(req.params.plantId, req.body)
    .then((updated) => {
      console.log(updated);
      res.status(200).json(updated);
    })
    .catch((err) => {
      next(err);
    });
});

//DEL
router.delete('/:id/plants/:plantId', validateUserId, (req, res, next) => {
  const id = req.params.id
  Plants.remove(req.params.plantId)
    .then((removed) => {
      res.status(200).json({ message: `Plant with id ${id} has been deleted.`, id });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
