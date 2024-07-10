import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function UserName() {
  const [complaintData, setComplaintData] = useState(null);

  const fetchComplaintData = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId'); // Get userId from localStorage
      console.log(authToken)
      console.log(userId)
      
      const response = await fetch(`http://localhost:5000/api/complaintdata/${userId}`, {
        method:"GET",
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch complaint data');
      }

      const complaintData = await response.json();
      setComplaintData(complaintData);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  useEffect(() => {
    fetchComplaintData()
  }, [])

  return (
    <div>
      {complaintData ? (
        <div>
          <h2></h2>
          <div>
          {complaintData.map((complaint, index) => (
              <div key={index}>
                <h3>{complaint.personalInformation.fullName}</h3>
                <p>Email: {complaint.personalInformation.email}</p>
                <p>Phone: {complaint.personalInformation.phoneNumber}</p>
                <p>Address: {complaint.addressDetails.streetAddress}, {complaint.addressDetails.city}, {complaint.addressDetails.state}, {complaint.addressDetails.country}</p>
                <p>Category: {complaint.complaintDetails.category}</p>
                <p>Location: {complaint.complaintDetails.locationOfIncident}</p>
                <p>Description: {complaint.complaintDetails.description}</p>
                <p>Status: {complaint.status}</p>
                {complaint.supportingDocuments && complaint.supportingDocuments.documents.length > 0 && (
                  <div>
                    <h4>Supporting Documents:</h4>
                    <ul>
                      {complaint.supportingDocuments.documents.map((document, docIndex) => (
                        <li key={docIndex}>
                          <Link to={document.url} target="_blank" rel="noopener noreferrer">{document.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
             </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
