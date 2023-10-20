import styles from "./ResponsiveCard.module.scss"
import Datacard from "./DataCard/Datacard.component"
export default function ResponsiveCard({data}) {
  return (
    <div>
        {data.map((ele,ind) => {
            const {image,heading,text} = ele;
            return ( <Datacard key={ind} image = {image} heading = {heading} text = {text}/> )
        })}
    </div>
  )
}
