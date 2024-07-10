import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

export default function AdminDashboard() {
    const { categoryName } = useParams();
    const [complaints, setComplaints] = useState([]);
    const [activeTab, setActiveTab] = useState('received');;
    console.log(categoryName)

    useEffect(() => {
        fetchComplaintsByCategory(categoryName);
    }, [categoryName]);

    const fetchComplaintsByCategory = async () => {
        try {
              const response = await fetch(`http://localhost:5000/api/complaints/${categoryName}`, {
                method: "GET",
                headers: {
                   
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch complaints');
            }

            const data = await response.json();
            setComplaints(data);
        } catch (error) {
            console.error('Error fetching complaints:', error);
            // Handle error
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // You can fetch complaint cards data based on the selected tab here
    };

    return (
        <div>
            <Logo />
            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card border-dark">
                            <div className="card-body">
                                <h3>Complaint Registration</h3>
                                <div className="btn-group-vertical">
                                    <button
                                        className={`btn btn-outline-primary ${activeTab === 'received' ? 'active' : ''}`}
                                        onClick={() => handleTabChange('received')}
                                    >
                                        Received Complaints
                                    </button>
                                    <button
                                        className={`btn btn-outline-primary ${activeTab === 'inProcess' ? 'active' : ''}`}
                                        onClick={() => handleTabChange('inProcess')}
                                    >
                                        Complaints In Process
                                    </button>
                                    <button
                                        className={`btn btn-outline-primary ${activeTab === 'resolved' ? 'active' : ''}`}
                                        onClick={() => handleTabChange('resolved')}
                                    >
                                        Resolved Complaints
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card border-white">
                            <div className="card-body">
                                <h3 className="card-title">{categoryName} Complaints</h3>
                                <div>
                                    {complaints.map(complaint => (
                                        <div key={complaint.id}>
                                            <h3>{complaint.title}</h3>
                                            <p>{complaint.description}</p>
                                            {/* Add buttons to update complaint status */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
