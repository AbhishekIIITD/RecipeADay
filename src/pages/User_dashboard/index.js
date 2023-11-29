import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.scss";
// import Cuisines from "../../components/DashBoard/cuisines.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import Settings from "@/components/Settings/Settings";
import Cuisines from "@/components/Cuisines/Cuisines";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchBearerToken,fetchRecipeOfTheDay } from "../api/auth/recipedb";
import SettingsImg from "../../assets/setting.png"
import ProfileImg from "../../assets/user.png"
import cuisineImg from "../../assets/chef.png"
import { Image } from "next/dist/client/image-component";



export default function Dashboard({recipe}) {
  const [activeComponent, setActiveComponent] = useState("settings");
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push({
        pathname: "/",
      });
    }
  }, [session, router]);

  const switchComponent = (componentName) => {
    setActiveComponent(componentName);

    // Redirect based on the button clicked
    if (componentName === "settings") {
    } else if (componentName === "Cuisines") {
    } else if (componentName === "profile") {
    }
  };

  return (
    <div className={styles.dashboardContainer+" mt-24"}>
      <div className={styles.sideMenu + " flex flex-col z-10 absolute top-32 bg-[#15202B] left-5 rounded-3xl"}>
        <button onClick={() => switchComponent("cuisines")} className={styles.rotateTrans+" m-2 bg-white rounded-3xl "}> <Image src={cuisineImg} height={50} width={50} /> </button>{" "}
        <button onClick={() => switchComponent("profile")} className={styles.rotateTrans+" m-2 bg-white rounded-3xl "}> <Image src={ProfileImg} height={50} width={50} /> </button>{" "}
      </div>{" "}
      <div className={styles.dashboardContent}>
        {" "}
        {activeComponent === "cuisines" && <Cuisines recipe={recipe}/>}{" "}
        {activeComponent === "profile" && <Profile />}{" "}
      </div>{" "}
    </div>
  );
}


export const getStaticProps = async () => {
  const token = await fetchBearerToken();
  const recipe = await fetchRecipeOfTheDay(token);
  // console.log("lol");

  return {
      props: { recipe: recipe },
  };
};
