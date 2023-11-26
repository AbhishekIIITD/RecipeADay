
import Image from "next/image"
import styles from "./DataCard.module.scss"
export default function DataCard({heading,subheading ,src ,variation2}) {
  return (
    <div className={styles.datacard}>
        
        <div className={styles.imgContainer + " mb-5"}>
          <img src={src}></img>
        </div>

    </div>
  )
}
