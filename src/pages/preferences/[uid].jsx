import { useRouter } from 'next/router'
import styles from "../../styles/pref.module.scss"
import { perf } from './perferenceOptions';
export default function Preferences (){
    const router = useRouter();
    let customPerfs = perf;
    // get prefs from api and set default value of  customPerfs accordinglt
    const {uid} = router.query;
    
    return( <div className={styles.pref} >
        <div className={styles.mainHeading} >
            <div className={styles.h} >Tell us your preference</div>
            <div className={styles.p} >And we will send recipes suited for you</div>
            <div className={styles.p} >You decide what dietary recipes you want in your inbox</div>
        </div>
            <div className={styles.prefbegin}>
                {customPerfs.map((ele,index) =>{
                    if(ele.type == 'toggle'){
                        return( 
                        <div className={styles.prefToggle} key={index}>
                            <div className={styles.perfToggleName} >{ele.name}</div>
                            <label className={styles.switch}>
                                <input type="checkbox" name={ele.name} id={ele.name} defaultChecked = { ele.default ? true : false  } />
                                <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>
                        </div>)
                    }

                })}
            </div>
    </div> )

}