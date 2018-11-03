const express = require('express');
const router = express.Router();
const Controller = require('../controllers/customers');
router.get('/', async (req, res) => {
    const data = await Controller.findAll();
    res.send(data);
  });

  router.get('/:Id/:Pass', async (req, res) => {
    const user = req.params.Id;
    const pass = req.params.Pass;
    const data = await Controller.login(user,pass);
    res.send(data);
  });
  module.exports = router;