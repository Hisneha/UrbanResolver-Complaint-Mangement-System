import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling
import { Link, useNavigate } from 'react-router-dom';

export default function Admin() {
    const [complaintCategories, setComplaintCategories] = useState([]);

    const fetchComplaintCategories = async () => {
        let response = await fetch("http://localhost:5000/api/complaintcategories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setComplaintCategories(response[0])

        const counts = {};
    for (const category of response) {
      const totalCount = await fetchTotalComplaintsCount(category.catagoryName);
      counts[category.catagoryName] = totalCount;
    }
    setTotalComplaints(counts);

        console.log(response[0])
    }



    useEffect(() => {
        // Fetch complaint categories data from backend

        fetchComplaintCategories();
    }, []);

    const navigate = useNavigate();
    

    const handleCategoryClick = (categoryName) => {

        navigate(`/adminDashboard/${categoryName}`);
    };

    
    const [totalComplaints, setTotalComplaints] = useState(0);
    // Define a function to fetch total complaints count for a specific category
const fetchTotalComplaintsCount = async (categoryName) => {
    try {
      const response = await fetch(`http://localhost:5000/api/totalcomplaints/${categoryName}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch total complaints count');
      }
      const data = await response.json();
      return data.totalCount; // Assuming the response includes the total count
    } catch (error) {
      console.error(error);
      return 0; // Return 0 if an error occurs
    }
  };
  

    useEffect(() => {
        // Fetch total complaints count from the backend

        fetchTotalComplaintsCount();
    }, []);

    

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Admin Dashboard</h2>
            <div className="row">

                {complaintCategories.map((category, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                        <Card className='bg-warning'>
                            <Card.Body>
                                <Card.Title>{category.catagoryName}</Card.Title>
                                
                                <Link variant="success" to="/adminDashboard" onClick={() => handleCategoryClick(category.catagoryName)}>View Complaints</Link>
                                <div className="total d-inline fs-3 text-light mx-5 mt-3">{totalComplaints[category.catagoryName]}</div>

                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
