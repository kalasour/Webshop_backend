const express = require('express');
const router = express.Router();
const Controller = require('../controllers/waiting_list');
router.get('/', async (req, res) => {
    const data = await Controller.findAll();
    res.send(data);
  });


  router.get('/:Id', async (req, res) => {
    const user = req.params.Id;
    const data = await Controller.findById(user);
    res.send(data);
  });
  module.exports = router;