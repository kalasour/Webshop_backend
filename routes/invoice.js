const express = require('express');
const router = express.Router();
const Controller = require('../controllers/invoice');
router.get('/', async (req, res) => {
  const data = await Controller.findAll();
  res.send(data);
});

router.get('/TopSale', async (req, res) => {
  const data = await Controller.TopSale();
  res.send(data);
});
  module.exports = router;