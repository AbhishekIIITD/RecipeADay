import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.scss";
import Cuisines from "../../components/DashBoard/cuisines.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import Settings from "@/components/Settings/Settings";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
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
      
    } else if (componentName === "cuisines") {
      router.push({
        pathname: "/cusinies",
        query: { user: session.data.user.name, email: session.data.user.email },
      });
    } else if (componentName === "profile") {
      
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sideMenu}>
        <button onClick={() => switchComponent("settings")}> Settings </button>{" "}
        <button onClick={() => switchComponent("cuisines")}> Cuisines </button>{" "}
        <button onClick={() => switchComponent("profile")}> Profile </button>{" "}
      </div>{" "}
      <div className={styles.dashboardContent}>
        {" "}
        {activeComponent === "cuisines" && <Cuisines />}{" "}
        {activeComponent === "settings" && <Settings />}{" "}
        {activeComponent === "profile" && <Profile />}{" "}
      </div>{" "}
    </div>
  );
}
