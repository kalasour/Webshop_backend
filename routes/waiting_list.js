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


  router.post('/', async (req, res) => {
    try {
      const back = await Controller.create(req.body);
      res.send(back);
    } catch (err) {
      res.send(err);
    }
  });
  
  router.put('/', async (req, res) => {
    try {
      const back = await Controller.update(
        req.body
      );
  
      res.send(back);
    } catch (err) {
      console.log(err);
    }
  });
  
  
  router.delete('/:obj', async (req, res) => {
    const obj = JSON.parse(req.params.obj);
    try {
      await Controller.Delete(obj);
      res.send(`{ "success": true }`);
    } catch (err) {
      console.log(err);
    }
  });
  module.exports = router;