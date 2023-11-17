import React, { useState, useEffect } from 'react';
import styles from '../../styles/profile.module.scss'; 
import { useRouter } from 'next/dist/client/router';
import avatar from "../../../public/ProfileAvatar.png"
import Image from 'next/image';

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
    <div className={" flex flex-col justify-center align-middle text-center bg-white text-black"}>
      <Image src={avatar} height={50} width={50} className=' ml-[37rem] mb-5 mt-4'>

      </Image>
      <div className=' mb-3'>
      Name :  {userData.name}
      </div>
      <div className=' mb-3'>
      email :  {userData.email}
      </div>
      <div className=' mb-3'>
      height :  {userData.height}
      </div>
      <div className=' mb-3'>
      weight :  {userData.weight}
      </div>
      <div className=' mb-3'>
      cuisine :  {userData.cuisine}
      </div>
      <div className=' mb-3'>
      healthIssue :  {userData.healthIssue}
      </div>
      <div className=' mb-3'>
      vegNonVeg :  {userData.vegNonVeg}
      </div>
      
    </div>
  );
};

export default Profile;
