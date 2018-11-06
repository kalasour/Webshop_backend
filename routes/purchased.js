const express = require('express');
const router = express.Router();
const purchasedController = require('../controllers/purchased');
router.get('/', async (req, res) => {
  const purchased = await purchasedController.findAll();
  res.send(purchased);
});

router.get('/TopView', async (req, res) => {
  const purchased = await purchasedController.TopView();
  res.send(purchased);
});

router.get('/TopSale', async (req, res) => {
  const purchased = await purchasedController.TopSale();
  res.send(purchased);
});

router.get('/promotion', async (req, res) => {
  const purchased = await purchasedController.promotion();
  res.send(purchased);
});

router.get('/type/:type_id', async (req, res) => {
  const type = req.params.type_id;
  const purchased = await purchasedController.onlyType(type);
  res.send(purchased);
});
  module.exports = router;