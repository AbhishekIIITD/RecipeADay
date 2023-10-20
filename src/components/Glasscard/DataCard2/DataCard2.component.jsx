
import Image from "next/image"
import styles from "./DataCard2.module.scss"
export default function DataCard2({heading,subheading ,src}) {
  return (
    <div className={styles.datacard}>
 
        <div className={styles.imgContainer}>
          <Image src = {src} alt = {`subheading image`}/>
        </div>
        <h1>
            {heading}
        </h1>
        <p>
            {subheading}
        </p>
    </div>
  )
}
