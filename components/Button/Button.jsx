'use client';
import styles from "./Button.module.scss";
export default function Button({ onClick, text }) {
  return (
    <div className={styles.btn}>
      <div onClick={onClick} className={styles.btnHollow}>{text}</div>
    </div>
  );  
}
