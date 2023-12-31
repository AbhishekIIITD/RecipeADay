import styles from "./GlassCard.module.scss"
import DataCard from "./DataCard/DataCard.component"
import IMG from "../../assets/dummyARAD.png"
export default function GlassCard({className,src}) {
  return (
    <div className={`${styles.glasscard} ${className}`}>
        <DataCard heading="Recipie of the Day" src= {src} subheading="Egyptian Onion Pita Bread"/>
    </div>
  )
}
