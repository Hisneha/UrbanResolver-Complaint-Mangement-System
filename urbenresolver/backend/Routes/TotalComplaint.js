const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Route to fetch total complaints count for a specific category
router.get('/totalcomplaints/:categoryName', async (req, res) => {
  try {
    const categoryName = req.params.categoryName;
    // Query the database to count the total complaints for the specified category
    const totalCount = await Complaint.countDocuments({ category: categoryName });
    // Send the total count in the response
    res.json({ totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
