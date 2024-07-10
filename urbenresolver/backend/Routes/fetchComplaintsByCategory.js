// Import necessary modules and models
const express = require('express');
const Complaint = require('../models/Complaint');

// Create a router
const router = express.Router();

// Route for fetching complaints by category
router.get('/complaints/:categoryName', async (req, res) => {
    const { categoryName } = req.params;
    try {
        // Query the database for complaints matching the category
        const complaints = await Complaint.find({ 'complaintDetails.category': categoryName });

        // Return the fetched complaints as a response
        res.json(complaints);
    } catch (error) {
        console.error('Error fetching complaints:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Export the router
module.exports = router;
