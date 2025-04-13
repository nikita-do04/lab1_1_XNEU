const express = require('express');
const router = express.Router();
const Contract = require('../models/Contract');

router.get('/', async (req, res) => {
  const data = await Contract.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  try {
    const contract = new Contract(req.body);
    await contract.save();
    res.status(201).json(contract);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const contract = await Contract.findById(req.params.id);
  contract ? res.json(contract) : res.status(404).send('Not found');
});

router.put('/:id', async (req, res) => {
  const updated = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Not found');
});

router.delete('/:id', async (req, res) => {
  const deleted = await Contract.findByIdAndDelete(req.params.id);
  deleted ? res.sendStatus(204) : res.status(404).send('Not found');
});

module.exports = router;
