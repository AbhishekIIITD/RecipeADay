// 'use client';
import styles from "./Subscribe.module.scss";
import { useContext,useEffect } from "react";
import SubscribeContext from "../SubscribeContext/SubscribeContext";
export default function SubscribeInputBox({identifier}) {
  let {setOnSubButtonClick} = useContext(SubscribeContext) 

  useEffect(()=>{ 
    setOnSubButtonClick ( () => (set) =>{
      set ? document.getElementById(identifier).classList.add(`${styles.wrong}`) : document.getElementById(identifier).classList.remove(`${styles.wrong}`)
      // console.log("set");
      
  }
  )
  },[])
 
  return (
    <div className={styles.sub}>
        <input id={identifier} placeholder=' '  type="email" />    
        <span>Email</span>
    </div>
  )
}
