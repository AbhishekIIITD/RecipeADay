import React, { useState, useEffect } from "react";
import styles from "../../styles/profile.module.scss";
import { useRouter } from "next/dist/client/router";
import avatar from "../../../public/ProfileAvatar.png";
import Image from "next/image";

const Profile = () => {
  const router = useRouter();
  const { email, name, Image } = router.query; // Retrieve email from the query parameters
  //console.log(router.query)
  const [userData, setUserData] = useState({
    name: name,
    email: email,
    cuisine: "",
    healthIssue: "",
    height: "",
    vegNonVeg: "",
    weight: "",
  });

  useEffect(() => {
    if (email) {
      fetchUserData(email);
    }
  }, [email]);

  const fetchUserData = async (email) => {
    try {
      const response = await fetch(`/api/getUserProfile?email=${email}`); // Pass email as a query parameter
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        throw new Error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <div className={" h-screen w-full pl-40 pr-20 pt-12 rounded-3xl border-2 "}>
      <div className=" text-4xl font-bold">My Profile</div>
      <div className=" flex flex-row mt-4 ">
        <div className=" flex flex-col w-1/3">
          <div className=" mt-2 mb-2 flex flex-row">
            <img className=" h-20 w-20 rounded-full" src={Image} alt="null" />
            <div className=" flex flex-col ml-4 translate-y-3">
              <div className=" text-2xl">{userData.name}</div>
              <div className=" text-[#D7D7D7] text-sm">{userData.email}</div>
            </div>
          </div>
          <div className=" mt-2 mb-2 flex flex-col ml-4 translate-y-3">
            <div className=" text-xl">Name</div>
            <div className=" text-[#D7D7D7] text-sm">{userData.name}</div>
          </div>
          <div className=" mt-2 mb-2 flex flex-col ml-4 translate-y-3">
            <div className=" text-xl">Email</div>
            <div className=" text-[#D7D7D7] text-sm">{userData.email}</div>
          </div>
          <div className=" mt-2 mb-2 flex flex-col ml-4 translate-y-3">
            <div className=" text-xl">Age</div>
            <div className=" text-[#D7D7D7] text-sm">Null</div>
          </div>

          <div className=" mt-2 mb-2 flex flex-row">
            <div className=" flex flex-col ml-4 translate-y-3">
              <div className=" text-xl">Height</div>
              <div className=" text-[#D7D7D7] text-sm">{userData.height}</div>
            </div>
            <div className=" flex flex-col ml-4 translate-y-3 justify-between">
              <div className=" text-xl">Weight</div>
              <div className=" text-[#D7D7D7] text-sm">{userData.weight}</div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-2/3">
          <div className=" w-3/5 h-2/4 rounded-2xl p-3 bg-[#4C5B67] border-2">
            <div className=" text-2xl">Favourite Regions</div>
          </div>
          <div className=" w-3/5 h-2/4 rounded-2xl p-3 bg-[#4C5B67] mt-2 border-2">
            <div className=" text-2xl">Allergic Ingredients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
