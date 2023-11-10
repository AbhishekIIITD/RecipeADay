"use client"
import styles from '../../styles/Login.module.scss';
import Image from 'next/image';
import { useState,useEffect } from 'react';
// import logo from "../../assets/logo_blackbg.png";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import { signIn, useSession } from 'next-auth/react';


import 'react-toastify/dist/ReactToastify.css'; // Import the default styles

export default function Signup() {
  
  const router = useRouter();
  const session=useSession();
  console.log(session);

  
  useEffect(() => {
    if (session.status==='authenticated') {
      handleSubmit(session.data)

    } 
  }, [session]);


  const handleGoogleSubmit=(e)=>{
    signIn('google');
    

  }


  const handleSubmit = async (data) => {

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:data.user.name,email:data.user.email}),
      });

      if (response.status === 200) {
        // Registration successful, you can redirect the user to a login page.
        console.log(response)
        router.push({
          pathname: '/UserPersonalisation',
          query: { user: session.data.user.name, email: session.data.user.email },
        });
        console.log("registered")
      }
      else if(response.status===201){
        console.log(response)
        router.push({
          pathname: '/User_dashboard',
          query: { user: session.data.user.name, email: session.data.user.email },
        });
        console.log("registered")
      }
      else if(response.status==400){
        router.push("/login")
      } 
      else {
        // Handle errors, e.g., display error messages to the user.
        console.log(response)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h2>RECIPEDIA</h2>
        <form className=''>
          
          
          <Image
            className={styles.GoogleImage +" translate-x-20"}
            src="/google.png"
            width={50}
            height={50}
            alt="Picture of the author"
            onClick={()=>signIn("google")}
          />
          <Link className={styles.SignUpLink} href="/login">
            <p>Already Registered? Sign In</p>
          </Link>
          
          
        </form>
      </div>
      <ToastContainer /> {/* Add the ToastContainer component */}
    </div>
  );
}
