const express = require('express');
const router = express.Router();
const Controller = require('../controllers/smell');
router.get('/', async (req, res) => {
    const data = await Controller.findAll();
    res.send(data);
  });
  module.exports = router;