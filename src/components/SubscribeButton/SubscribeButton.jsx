'use client';
import styles from "./SubscribeButton.module.scss";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import SubscribeContext from "../SubscribeContext/SubscribeContext";
import getAccessToken from "@/lib/ReceipeDBComponents/getAccessToken";
import getRecipeOfTheDay from "@/lib/ReceipeDBComponents/getRecipeOfTheDay";
import ReactLoading from "react-loading";
import {validateEmail} from "../../lib/utils";
import Image from 'next/image'
import {postSubsctiberToMongodb,sendEmail} from "../../lib/MongoDb/emailerFunctions"
import doneImg from "../../assets/done.svg";

export default function SubscribeButton({ inputFieldId }) {
  const [accessToken, setAccessToken] = useState(null);
  const [recipeOfTheDay, setRecipeOfTheDay] = useState(null);
  const { onSubButtonClick } = useContext(SubscribeContext);
  const [isLoading, setIsLoading] = useState(0);
  // let submitted = false;


  useEffect(() => {
    if (accessToken && !recipeOfTheDay) {
      getRecipeOfTheDay(accessToken).then((recipe) => {
        setRecipeOfTheDay(recipe);
      }).catch((error) => {
        console.log('Error fetching recipe of the day:', error);
      });
    } else if (!accessToken) {
      getAccessToken().then((token) => {
        setAccessToken(token);
      }).catch((error) => {
        console.log('Error fetching access token:', error);
      });
    }
  }, [accessToken, recipeOfTheDay]);

  const handleSubmit = async () => {
    setIsLoading(1);
    const email = document.getElementById(inputFieldId).value;
    console.log(email);
    if (!validateEmail(email)) {
      onSubButtonClick(true)
    } else {
      onSubButtonClick(false)
      const res = await postSubsctiberToMongodb(email);
      console.log(res);
      setIsLoading(2);
      if(res == 200){
        console.log("Here");
        sendEmail(email, recipeOfTheDay);
      }else{
        setIsLoading(3);
        // console.log("Here3");
        alert("Coudn't signup, something went wrong");
      }
    }
  }


  const sleep = ms => new Promise(r => setTimeout(r, ms));

 

  return (
    <>
      {(isLoading == 0) && (<div>
        <Button onClick={handleSubmit} text="Subscribe" />
      </div>)}
      {(isLoading == 1) && (<div className={styles.loading}> <ReactLoading height={40} width={40} type="spin" color="#3EA79D" /> </div>)}
      {(isLoading == 2) && (<div className={styles.doneImg}>
        <Image height={40} width={40} src = {doneImg} alt = "done "/>
      </div>)}
    </>
  )
}


