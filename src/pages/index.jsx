import React from 'react'
import Button from '@/components/Button/Button'
import Subscribe from '@/components/Subscribe/Subscribe'
import styles from "../styles/index.module.scss"
import HeroHeading from '@/components/HeroHeading/HeroHeading.component'
import GlassCard from '@/components/Glasscard/GlassCard.component'
import IMG from "../assets/dummyARAD.png"
import DataCard from '@/components/Glasscard/DataCard/DataCard.component'
// import "../styles/globals.scss"
import GetStarted from '@/components/Button/GetStartedButton/GetStarted.component'
export default function Index() {
  return (
    <div>
      <div className={styles.index}>
        <div className={styles.parent}>
          <div className={styles.headSub}>
            <HeroHeading className={styles.heading} />
            <Subscribe />
            {/* <GetStarted className={styles.getstarted} /> */}
            {/* <Button text={"Get Subscriber List"} onClick={
              async () => {
                const status = await getSubscriberListFromMongodb();
                if (status === 200) {
                  alert("Thank you for subscribing");
                } else {
                  alert("Something went wrong");
                }
              }
            } /> */}
          </div>
          <div>
            <GlassCard className={styles.glasscard} />
          </div>
        </div>
      </div>

      {/* <div className={styles.dataCards}>
        <DataCard variation2 src={IMG} heading={`Dish 1`} subheading= "Phasellus lacinia sapien condimentum sem mollis, quis consequat sapien hendrerit."/>
        <DataCard variation2 src={IMG} heading={`Dish 1`} subheading= "Phasellus lacinia sapien condimentum sem mollis, quis consequat sapien hendrerit."/>
        <DataCard variation2 src={IMG} heading={`Dish 1`} subheading= "Phasellus lacinia sapien condimentum sem mollis, quis consequat sapien hendrerit."/>
      </div> */}
      {/* we will show this on signing up */}
    </div>

  )
}



async function getSubscriberListFromMongodb() {
  const res = await fetch("/api/MongodbServerAPIs/getSubscribers" , {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const { error, data } = await res.json();
  if (error) {
    throw new Error(error);
  }
  console.log(data);
  return res.status;
}