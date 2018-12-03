const express = require('express');
const router = express.Router();
const Controller = require('../controllers/history');
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
  try {
    const back = await Controller.update(
      req.body
    );

    res.send(back);
  } catch (err) {
    console.log(err);
  }
});


router.delete('/:Obj', async (req, res) => {
  
  const Obj = JSON.parse(req.params.Obj);
  try {
    await Controller.Delete(Obj);
    res.send(`{ "success": true }`);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;