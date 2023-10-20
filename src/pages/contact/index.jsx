import styles from "../../styles/contact.module.scss";
import Location from "../../assets/location.png"
import Image from 'next/image'
export default function Contact() {
    return (
        <div className={styles.parent}>
            <div className={styles.heading} >Contact Us</div>
            <div className={styles.contactCard} >
                <div>
                    Dr. Ganesh Bagler
                    <br />
                    <u>Center for Computational Biology</u>
                    <br />
                    Indraprastha Institute of Information Technology Delhi (IIIT Delhi),
                    <br />
                    R&D Block,
                    <br />
                    Okhla Phase III, Near Govindpuri Metro Station,
                    <br />
                    New Delhi, India 110020.
                    <br />
                    Email: <u>bagler+RecipeDB@iiitd.ac.in</u>
                    <br />
                    Tel: +91-11-26907-443 (Work)
                    <br />
                </div>
                <div>
                    <Image src={Location} alt = "Maps image of our Loaction"/>
                </div>
            </div>
        </div>
    )
}
