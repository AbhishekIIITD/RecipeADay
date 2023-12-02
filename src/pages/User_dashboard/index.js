import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.scss";
import Profile from "../../components/Profile/Profile.jsx";
import Settings from "@/components/Settings/Settings";
import Cuisines from "@/components/Cuisines/Cuisines";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { fetchBearerToken, fetchRecipeByID } from "../api/auth/recipedb";
import SettingsImg from "../../assets/setting.png";
import ProfileImg from "../../assets/user.png";
import cuisineImg from "../../assets/chef.png";
import { Image } from "next/dist/client/image-component";
import UserForm from "../UserPersonalisation";

export default function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("settings");
    const [userData, setUserData] = useState(null);
    const router = useRouter();
    const session = useSession();
    const { email } = router.query;
    console.log(email);
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
        if (componentName === "settings") {} else if (componentName === "Cuisines") {} else if (componentName === "profile") {}
    };

    return ( <
        div className = { styles.dashboardContainer + " mt-24" } >
        <
        div className = {
            styles.sideMenu +
            " flex flex-col z-10 absolute top-32 bg-[#15202B] left-5 rounded-3xl"
        } >
        <
        button onClick = {
            () => switchComponent("Cuisines")
        }
        className = { styles.rotateTrans + " m-2 bg-white rounded-3xl " } > { " " } <
        Image src = { cuisineImg }
        height = { 50 }
        width = { 50 }
        />{" "} < /
        button > { " " } <
        button onClick = {
            () => switchComponent("profile")
        }
        className = { styles.rotateTrans + " m-2 bg-white rounded-3xl " } > { " " } <
        Image src = { ProfileImg }
        height = { 50 }
        width = { 50 }
        />{" "} < /
        button > { " " } <
        /div>{" "} <
        div className = { styles.dashboardContent } > { " " } {
            activeComponent === "cuisines" && < Cuisines email = { email }
            />}{" "} { activeComponent === "profile" && < Profile / >
        } { " " } <
        /div>{" "} < /
        div >
    );
}



export async function getServerSideProps(context) {
    //const email = context.params.email;
    const { query } = context;
    const fetchUserRecipeID = async(email) => {
        try {
            const response = await fetch(`http://localhost:3000/api/getUserHistory?email=${email}`); // Pass email as a query parameter
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                const recipesArray = [];
                const token = await fetchBearerToken();


                for (let i = 0; i < data.length; i++) {
                    const recipeResponse = await fetchRecipeByID(token, data[i]);

                    // const recipe = await recipeResponse.json();
                    // console.log(recipe);
                    recipesArray.push(recipeResponse);
                }
                for (let i = 0; i < data.length; i++) {
                    console.log(recipesArray[i])
                }

            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    // Ensure you await the result of the asynchronous function
    var recipeHistory = await fetchUserRecipeID(query.email);
    if (recipeHistory == undefined) {
        recipeHistory = []
    }

    return {
        props: {
            recipeHistory: recipeHistory,
        },
    };
}