import React from 'react'
import Button from '@/components/Button/Button'
import Subscribe from '@/components/Subscribe/Subscribe'
import styles from "../styles/index.module.scss"
import HeroHeading from '@/components/HeroHeading/HeroHeading.component'
import GlassCard from '@/components/Glasscard/GlassCard.component'
import IMG from "../assets/dummyARAD.png"
import DataCard from '@/components/Glasscard/DataCard/DataCard.component'
import Head from 'next/head'
// import "../styles/globals.scss"
import GetStarted from '@/components/Button/GetStartedButton/GetStarted.component'
import { useRouter } from 'next/router'
export default function Index() {
  const router =useRouter();
  const handleClick=()=>{
    
    router.push({
      pathname: '/Signup'
    });

  }
  return (
    <div className=' pl-44 pr-44'>
    <div className={styles.ArchitectureFont +' mt-36 text-5xl mb-12 '}>
      Recipe Of The Day
    </div>
    <div className="flex md:flex-row justify-between">
      <div className=' lg:w-2/5 sm:w-full'>
        <div className=' text-3xl mb-3'>
          Name
        </div>
        <div className=' mb-12'>
        It is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka. It is made from rice, lentils, Urad dal, Chana dal, fenugreek, puffed rice, Toor dal, dry red chilli and served with potato curry, chutneys, and sambar....
        </div>
        <div>
        <button type='submit' onClick={handleClick} className=" mt-4 text-black p-4 hover:rounded-lg hover:scale-105 bg-[#3ea79d]"  >Resgister for more</button>
      </div>
      </div>
      
      <div>
        <GlassCard></GlassCard>
      </div>      
    </div>

    <div className=' mt-16 mb-12'>
        <div className={styles.ArchitectureFont +' text-5xl'}>
        EXPLORE MORE
        </div>
        <div>
        From continental to italian...
        we got it all
      </div>
      </div>
      
      <script src="https://apis.google.com/js/platform.js" async defer></script>

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