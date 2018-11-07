const express = require('express');
const router = express.Router();
const Controller = require('../controllers/view');
router.get('/', async (req, res) => {
  const data = await Controller.findAll();
  res.send(data);
});

router.get('/groupByType', async (req, res) => {
  const data = await Controller.groupByType();
  res.send(data);
});


router.post('/', async (req, res) => {
  try {
    const back = await Controller.create(req.body);
    res.send(back);
  } catch (err) {
    res.send(err);
  }
});
  module.exports = router;