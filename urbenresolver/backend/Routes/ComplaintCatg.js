// Import necessary modules
const express = require('express');
const router = express.Router();
const ComplaintCategory = require('../models/CompCatg');

// Route to fetch complaint categories
router.post('/complaintcategories', async (req, res) => {
  try {
    // Fetch all complaint categories from the database
    res.send([global.catg])
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router;
