import React, { useState, useEffect } from 'react';

export default function UserName() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId'); // Get userId from localStorage
      console.log(authToken)
      console.log(userId)
      
      const response = await fetch(`http://localhost:5000/api/${userId}`, {
        method:"GET",
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Location: {userData.location}</p>
          {/* Display other user data fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
