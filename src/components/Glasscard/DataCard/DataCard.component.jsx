
import Image from "next/image"
import styles from "./DataCard.module.scss"
export default function DataCard({heading,subheading ,src ,variation2}) {
  return (
    <div className={styles.datacard}>
        {!variation2 && (<h1>
            {heading}
        </h1>)}
        <div className={styles.imgContainer}>
          <Image src = {src} alt = {`subheading image`}/>
        </div>
        {variation2 && (<h1>
            {heading}
        </h1>)}
        <p>
            {subheading}
        </p>
    </div>
  )
}
