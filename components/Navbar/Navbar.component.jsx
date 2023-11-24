import styles from "./Navbar.module.scss";
// import { useSession } from "next-auth/react";
import Link from 'next/link'
import Image from 'next/image'
import proficeUserDefaut from "../../assets/profileUserDefault.png"
import logo from "../../assets/logo.png";
import { useRef } from "react";
import { useOutsideAlerter } from "../../lib/customHooks";
import Button from "../Button/Button";
import { signOut, useSession } from "next-auth/react";
export default function Navbar() {
    // const user = null;
    const session=useSession();
    const userOptionsRef = useRef();
    const profileRef = useRef();
    const actionButtonRef = useRef();
    const slideInmenuRef = useRef();
    const slideInmenuContainerRef = useRef();
    const handleProfileClick = () => {
        userOptionsRef.current.classList.toggle(styles.toggleOpacity);
    };
    // const username =null;
    const makeUserdropDownVanish = () => {
        userOptionsRef.current.classList.add(styles.toggleOpacity);
    }
    const makeActiondropDownVanish = ()=>{
        slideInmenuRef.current.classList.remove(styles.actionDDToggle)
        actionButtonRef.current.classList.remove(styles.menuOpened)
        
    }
    useOutsideAlerter(profileRef, makeUserdropDownVanish)
    useOutsideAlerter(slideInmenuContainerRef, makeActiondropDownVanish)
    
    const handleActionMenuClick = ()=>{
        actionButtonRef.current.classList.toggle(styles.menuOpened)
        slideInmenuRef.current.classList.toggle(styles.actionDDToggle)
        
    }

    return (
        <nav className={styles.nav}>
            <div ref={slideInmenuContainerRef} className={styles.div1} style={{"width":"100%"}}>
                <div ref ={actionButtonRef} onClick={handleActionMenuClick} className={styles.actionButton}>
                    <div className={styles.divAc1}></div>
                    <div className={styles.divAc2}></div>
                    <div className={styles.divAc3}></div>
                </div>
                <ul ref={slideInmenuRef} className={styles.parentContainer}>
                    <li className={styles.navPages}>
                        <Link legacyBehavior href="/">
                            <a onClick={makeActiondropDownVanish} href="">
                                <Image src={logo} alt="Recipedia Logo" className={styles.logo} />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navPages}>
                        
                        <Link href='/'>
                            <div onClick={makeActiondropDownVanish}>Home</div>
                        </Link>
                        <Link href='search'>
                            <div onClick={makeActiondropDownVanish}>Search</div>
                        </Link>
                        <Link href="/contact">
                            <div onClick={makeActiondropDownVanish}>Contact</div>
                        </Link>
    
                        <Link href="/faqs">
                            <div onClick={makeActiondropDownVanish}>FAQ</div>
                        </Link>
                    </li>
                    <li style={{"width":"40px"}}></li>
                </ul>
            </div>
            <div ref={profileRef} className={styles.profilePicContainer}>
                    <div className={styles.profilePicContainer} onClick={handleProfileClick} >
                        <Image src={proficeUserDefaut} alt={(session.status=='authenticated') ? session.data.user.name : "Login First"} srcSet=""  className={styles.profilePic}  />
                    </div>
                    <ul ref={userOptionsRef} className={`${styles.userOptions} ${styles.toggleOpacity}`}>
                        {(session.status=='authenticated') && <>
                            
                            <Button className={styles.signOutBtn} onClick={() => { signOut('google') }} >Sign out</Button></>}
                        {!(session.status=='authenticated') &&
                           <>
                           <Link href="/login">
                               <li className={styles.dropdownLink} onClick={makeUserdropDownVanish}>Login</li>
                           </Link>
                           <Link href="/Signup">
                               <li className={styles.dropdownLink} onClick={makeUserdropDownVanish}>Sign Up</li>
                           </Link>
                           </>}
                    </ul>
            </div>
        </nav>
    )   
}
