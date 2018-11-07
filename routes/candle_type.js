const express = require('express');
const router = express.Router();
const Controller = require('../controllers/candle_type');
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

  router.put('/:Id', async (req, res) => {
    const Id = req.params.Id;
    try {
      const back = await Controller.update(
        req.body,
        Id
      );
  
      res.send(back);
    } catch (err) {
      console.log(err);
    }
  });


  router.delete('/:Id', async (req, res) => {
    const Id = req.params.Id;
    try {
      await Controller.Delete(Id);
      res.send(`{ "success": true }`);
    } catch (err) {
      console.log(err);
    }
  });
  module.exports = router;