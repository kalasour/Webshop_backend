const express = require('express');
const router = express.Router();
const Controller = require('../controllers/report');
router.get('/', async (req, res) => {
  const data = await Controller.findAll();
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
router.get('/:Month/:Year', async (req, res) => {
  const m = req.params.Month;
  const y = req.params.Year;
  const data = await Controller.findByMonthAndYear(m, y);
  res.send(data);
});
router.get('/sum/:Month/:Year', async (req, res) => {
  const m = req.params.Month;
  const y = req.params.Year;
  const data = await Controller.findAllMonthAndYear(m, y);
  res.send(data);
});
router.put('/:date', async (req, res) => {
  const date = req.params.date;
  try {
    const back = await Controller.update(
      req.body,
      date
    );

    res.send(back);
  } catch (err) {
    console.log(err);
  }
});


router.delete('/:date', async (req, res) => {
  const date = req.params.date;
  try {
    await Controller.Delete(date);
    res.send(`{ "success": true }`);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;