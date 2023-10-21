import styles from '../../styles/Login.module.scss'; 
import Image from 'next/image';
import { useState } from 'react';
import logo from "../../assets/logo_blackbg.png";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';


export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();

  const handleGoogleSubmit=(e)=>{
    //do the needful anna
    gapi.load('auth2', async () => {
      const auth2 = await gapi.auth2.init({
        client_id: '263231929945-k2paolaf1o66jsgv08q1g93a7o987125.apps.googleusercontent.com', // Replace with your Google client ID
      });

      try {
        const googleUser = await auth2.signIn();
  
        const id_token = googleUser.getAuthResponse().id_token;
  
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_token }),
        });
  
        if (response.ok) {
          
          const data = await response.json();
          console.log(data.message); 
        } else {
          
          const errorData = await response.json();
          console.error(errorData.error);
        }
      } catch (error) {
        console.error('Error during Google Sign-In:', error);
      }
    });
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Registration successful, you can redirect the user to a login page.
        router.push('/User_dashboard')
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
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
        <Image
            className={styles.GoogleImage}
            src="/google.png"
            width={50}
            height={50}
            alt="Picture of the author"
            onClick={handleGoogleSubmit}
          />
        <Link className={styles.SignUpLink} href="/Signup"><p>Not Registered yet? Sign Up</p></Link>
        
      </form>
    </div>
    </div>
  );
}

