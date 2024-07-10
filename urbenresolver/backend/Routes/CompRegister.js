const express = require('express');
const router = express.Router();
const Complaint = require("../models/Complaint");
const { body, validationResult } = require('express-validator');

// Route for registering a complaint
router.post("/registercomplaint/:userId",
    
    async (req, res) => {
        // Validate request body
        const status="notApproved";

        try {
            // Create new complaint
            await Complaint.create({
                personalInformation: req.body.personalInformation,
                addressDetails: req.body.addressDetails,
                complaintDetails: req.body.complaintDetails,
                supportingDocuments: req.body.supportingDocuments,
                createdBy: req.params.userId, // Use the user ID from the route parameter
                status:status
            });

            res.json({ success: true, message: 'Complaint registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
);

module.exports = router;
