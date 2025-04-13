const mongoose = require('mongoose');
const Contract = require('./Contract');

const BranchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true }
});

BranchSchema.pre('findOneAndDelete', async function (next) {
  const branchId = this.getQuery()._id;
  await Contract.deleteMany({ branch_id: branchId });
  next();
});

module.exports = mongoose.model('Branch', BranchSchema);
