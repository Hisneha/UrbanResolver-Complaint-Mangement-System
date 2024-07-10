import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'; // Import useLocation hook


export default function CompScreen() {

    const location = useLocation();
    console.log("Location state:", location.state);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [complaint, setcomplaint] = useState([])
    const [complaintcat, setcomplaintcat] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/displaycatg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setcomplaintcat(response[1])
        setcomplaint(response[0])

        if (location.state && location.state.categoryName) { // Use location.state instead of props.location.state
            setSelectedCategory(location.state.categoryName); // Use location.state instead of props.location.state
            console.log(location.state.categoryName)
        }
        // console.log(response[0],response[1])
    }

   

    console.log("Selected category:", selectedCategory);
    useEffect(() => {
        loadData()
    }, [])

    const filteredComplaints = selectedCategory
        ? complaint.filter(item => item.categoryName === selectedCategory)
        : complaint;

    return (
        <div>
            <div><Logo /></div>
            <div><Navbar /></div>
            <div className='"cn'>
            {filteredComplaints.map((complaintItem) => (
                    <Card
                        key={complaintItem._id}
                        categoryName={complaintItem.catagoryName}
                        description={complaintItem.description}
                        subcategories={complaintItem.subcategories}
                    />
                ))}
            </div>

        </div>
    )
}

