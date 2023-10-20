import styles from "./HeroHeading.module.scss";
import Typewriter from "typewriter-effect";

export default function HeroHeading({ className }) {
  return (
    <div className={className}>
      <h2 className={styles.heading}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Your Food Guide")

              .pauseFor(1000)
              .deleteAll()
              .typeString("From Continental to")
              .deleteAll()
              .typeString("Italian..")
              .deleteAll()
              .typeString("we`ve got it all")
              .start();
          }}
        />
      </h2>
      
    </div>
  );
}
