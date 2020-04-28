const express = require('express');
const router = express.Router();

const Plants = require('../models/plants-model.js');
const validateUserId = require('../middleware/validate-userid.js');

//GET
router.get('/:id/plants', validateUserId, (req, res, next) => {
  Plants.findByUser(req.params.id)
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
  Plants.remove(req.params.plantId)
    .then((removed) => {
      res.status(200).json({ message: 'Plant has been deleted.' });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
