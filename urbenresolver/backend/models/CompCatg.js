// Import necessary modules
const mongoose = require('mongoose');

// Define schema for complaint categories
const complaintCategorySchema = new mongoose.Schema({
  catagoryName: {
    type: String,
    required: true
  }
});

// Create model for complaint categories
const ComplaintCategory = mongoose.model('ComplaintCategory', complaintCategorySchema);

module.exports = ComplaintCategory;
