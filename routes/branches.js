const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch');

router.get('/', async (req, res) => {
  const data = await Branch.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  try {
    const branch = new Branch(req.body);
    await branch.save();
    res.status(201).json(branch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const branch = await Branch.findById(req.params.id);
  branch ? res.json(branch) : res.status(404).send('Not found');
});

router.put('/:id', async (req, res) => {
  const updated = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Not found');
});

router.delete('/:id', async (req, res) => {
    const deleted = await Branch.findOneAndDelete({ _id: req.params.id });
    if (!deleted) {
      return res.status(404).send('Not found');
    }
    res.sendStatus(204);
  });
  

module.exports = router;
