const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  sum: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Branch'
  },
  insurance_type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contract', ContractSchema);
