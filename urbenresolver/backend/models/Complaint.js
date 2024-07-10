const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    personalInformation: {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
    addressDetails: {
        streetAddress: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    complaintDetails: {
        category: {
            type: String,
            required: true
        },
        locationOfIncident: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    supportingDocuments: {
        documents: [{
            type: String,
            required: true
        }]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status:{
        type:String,
        required:true
    }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
