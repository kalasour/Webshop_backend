const express = require('express');
const router = express.Router();
const purchasedController = require('../controllers/purchased');
router.get('/', async (req, res) => {
    const purchased = await purchasedController.findAll();
    res.send(purchased);
  });
  module.exports = router;