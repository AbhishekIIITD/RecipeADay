import styles from '../../styles/Login.module.scss'; 
import Image from 'next/image';
import { useState,useEffect } from 'react';
import logo from "../../assets/logo_blackbg.png";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';


export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();
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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
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
        // router.push({
        //   pathname: '/UserPersonalisation',
        //   query: { user: session.data.user.name, email: session.data.user.email },
        // });
        console.log("registered")
      }
      else if(response.status===201){
        console.log(response)
        router.push({
          pathname: '/User_dashboard',
          query: { user: session.data.user.name, email: session.data.user.email ,userImage:session.data.user.image},
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
      <form onSubmit={handleSubmit}>
        
        <Image
            className={styles.GoogleImage +" translate-x-20"}
            src="/google.png"
            width={50}
            height={50}
            alt="Picture of the author"
            onClick={handleGoogleSubmit}
          />
        
      </form>
    </div>
    </div>
  );
}

