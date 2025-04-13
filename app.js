const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const branchesRouter = require('./routes/branches');
const contractsRouter = require('./routes/contracts');

const app = express();


mongoose.connect('mongodb+srv://nikitado0519:nXukz5hRugb3fpwY@cluster0.qztetke.mongodb.net/insurance?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB підключено'))
  .catch(err => console.error('Помилка MongoDB:', err));

app.use(express.json());

const swaggerDocument = YAML.load(path.join(__dirname, 'insurance-api.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/branches', branchesRouter);
app.use('/contracts', contractsRouter);

module.exports = app;
