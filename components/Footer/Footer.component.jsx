import styles from "./Footer.module.scss";
import Image from "next/image";
import IIITDLogo from "../../assets/iiitd.png";
import CC from "../../assets/CC.png";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image src={IIITDLogo} alt="IIITD Logo" />
      <p>Copyright © 2023 All rights reserved.</p>
      <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
          <Image src={CC} alt="Creative Commons image" />
      </a>
      <p>
        This work is licensed under a{" "}
        <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" className={styles.anchor}>
          Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
          License.
        </a>
      </p>
      <p>
        All material on this website is a product of research and is provided
        for your information only and may not be construed as medical advice or
        instruction.
        <br />
        No action or inaction should be taken based solely on the contents of
        this information instead, readers should consult appropriate health
        professionals on any matter relating to their health and well-being.
      </p>
      <p> <a href="https://iiitd.ac.in/" className={styles.anchor} >Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)</a> | <a href="https://cosylab.iiitd.edu.in/" className={styles.anchor} >Prof. Ganesh Bagler</a></p>
    </div>
  );
}
