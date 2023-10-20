import styles from "./FAQDropDown.module.scss"
import { useState } from "react"
export default function FAQDropDown({ question, answer }) {
    const[isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={styles.index}>
            <div className={styles.question}>
                <div style={{"transition":"all 0.5s"}} className ={`${isExpanded ? styles.questionColor : "" }`} >{question}</div>
                <div onClick={()=>{setIsExpanded(!isExpanded)}} className={styles.sign}> {isExpanded? "-" : "+"} </div>
            </div>
            {isExpanded&&<div className={styles.answer}>
                {answer}
            </div>}
        </div>
    )
}
