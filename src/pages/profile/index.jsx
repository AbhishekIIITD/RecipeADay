import React, { useState, useEffect } from 'react';
import styles from '../../styles/profile.module.scss'; 
import { useRouter } from 'next/dist/client/router';

const Profile = () => {
  const router = useRouter();
  const { email } = router.query; // Retrieve email from the query parameters

  const [userData, setUserData] = useState({
    name: '',
    email: email,
    cuisine: '',
    healthIssue: '',
    height: '',
    vegNonVeg: '',
    weight: '',
  });

  useEffect(() => {
    if (email) {
      fetchUserData(email);
    }
  }, [email]);

  const fetchUserData = async (email) => {
    try {
      const response = await fetch(`/api/getUserProfile?email=${email}`); // Pass email as a query parameter
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        throw new Error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <h2>User Profile</h2>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {email}</p>
        <p>Cuisine: {userData.cuisine}</p>
        <p>Health Issue: {userData.healthIssue}</p>
        <p>Height: {userData.height}</p>
        <p>Veg/Non-Veg: {userData.vegNonVeg}</p>
        <p>Weight: {userData.weight}</p>
      </div>
    </div>
  );
};

export default Profile;
