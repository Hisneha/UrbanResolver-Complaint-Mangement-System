const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Route to get user data by ID
router.get('/complaintdata/:userId', async (req, res) => {
  try {
    const complaint = await Complaint.find({'createdBy':req.params.userId});
    if (!complaint) {
      return res.status(404).json({ message: 'complaint not found' });
    }
    res.json(complaint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
