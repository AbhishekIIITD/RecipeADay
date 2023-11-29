import React, { useState, useEffect } from "react";
import styles from "../../styles/profile.module.scss";
import { useRouter } from "next/dist/client/router";
import avatar from "../../../public/ProfileAvatar.png";
import Image from "next/image";
import settingsPng from "../../assets/cogwheel.png";
import correct from "../../assets/correct.png";
import { Regions } from "@/assets/region";
const Profile = () => {
  const router = useRouter();
  //console.log(Regions)
  const { email, name, userImage } = router.query;
  // Retrieve email from the query parameters
  //console.log(router.query)
  const [changeHeight, setChangeHeight] = useState(false);
  const [changeWeight, setChangeWeight] = useState(false);
  const [FavRegion, setFavRegion] = useState();
  const [HeightValue, setHeightValue] = useState(0);
  const [WeightValue, setWeightValue] = useState(0);
  const [isAddClicked, setisAddClicked] = useState(false);

  function handleChangeHeight() {
    handleSubmit();
    setChangeHeight((prevState) => !prevState);
  }
  function handleChangeWeight() {
    handleSubmit();
    setChangeWeight((prevState) => !prevState);
  }
  function handleisAddClicked() {
    setisAddClicked(true);
  }

  // function handleHeightValue(e) {
  //   setHeightValue(e.target.vaue);
  // }
  // function handleWeightValue(e) {
  //   setWeightValue(e.target.value);
  // }

  const [userData, setUserData] = useState({
    name: name,
    email: email,
    height: "",
    vegNonVeg: "",
    weight: "",
    favourite_regions: [],
    allergies: [],
    Age: "",
  });

  const handleFavRegionChange = (e) => {
    const { value } = e.target.value;
    var PrevFavRegion;
    if (!userData.hasOwnProperty("favourite_regions")) {
      PrevFavRegion = [];
      PrevFavRegion.push(value);
      setUserData((prev) => ({
        ...prev,
        favourite_regions: PrevFavRegion
      }));
      console.log(userData)
    } else {
      PrevFavRegion=userData.favourite_regions;
      PrevFavRegion.push(value);

      setUserData((prev) => ({
        ...prev,
        [favourite_regions]: PrevFavRegion,
      }));
      console.log(userData)
    }
    setisAddClicked(false);
    
    handleSubmit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (email) {
      fetchUserData(email);
    }
  }, [email]);

  const handleSubmit = async () => {
    console.log(userData); // Log the formData to ensure it's captured on submit

    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        // Assuming success means redirecting to a user dashboard
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            <img
              className=" h-20 w-20 rounded-full"
              src={userImage}
              alt="null"
            />
            <div className=" flex flex-col ml-4 translate-y-3">
              <div className=" text-2xl">{userData.name}</div>
              <div className=" text-[#D7D7D7] text-sm">{userData.email}</div>
            </div>
          </div>
          <div className=" mt-2 mb-2 flex flex-col ml-4 translate-y-3">
            <div className=" text-xl">Name</div>
            <div className=" text-[#D7D7D7] text-sm border w-4/5 rounded-xl p-1">
              {userData.name}
            </div>
          </div>
          <div className=" mt-2 mb-2 flex flex-col ml-4 translate-y-3">
            <div className=" text-xl">Email</div>
            <div className=" text-[#D7D7D7] text-sm border w-4/5 rounded-xl p-1">
              {userData.email}
            </div>
          </div>
          <div className=" mt-2 mb-2 flex flex-col ml-4 translate-y-3">
            <div className=" text-xl">Age</div>
            <div className=" text-[#D7D7D7] text-sm border w-4/5 rounded-xl p-1">
              Null
            </div>
          </div>

          <div className=" mt-2 mb-2 flex flex-row">
            <div className=" flex flex-col ml-4 translate-y-3">
              <div className=" text-xl">Height</div>
              {!changeHeight ? (
                <div className=" flex flex-row text-[#D7D7D7] text-sm border  rounded-xl p-1">
                  {userData.height}
                  <Image
                    src={settingsPng}
                    height={18}
                    width={18}
                    alt="not loaded"
                    className=" ml-2"
                    onClick={handleChangeHeight}
                  />
                </div>
              ) : (
                <div className=" flex flex-row w-fit">
                  <input
                    className=" w-1/3 bg-black border rounded-xl"
                    type="text"
                    value={userData.height}
                    onChange={handleChange}
                    name="height"
                  />
                  <Image
                    src={correct}
                    height={18}
                    width={18}
                    alt="not loaded"
                    className=" ml-2"
                    onClick={handleChangeHeight}
                  />
                </div>
              )}
            </div>
            <div className=" flex flex-col ml-4 translate-y-3 justify-between">
              <div className=" text-xl">Weight</div>
              {!changeWeight ? (
                <div className=" flex flex-row text-[#D7D7D7] text-sm border rounded-xl p-1">
                  {userData.weight}
                  <Image
                    src={settingsPng}
                    height={18}
                    width={18}
                    alt="not loaded"
                    className=" ml-2"
                    onClick={handleChangeWeight}
                  />
                </div>
              ) : (
                <div className=" flex flex-row w-fit">
                  <input
                    className=" w-1/3 bg-black border rounded-xl"
                    type="text"
                    value={userData.weight}
                    onChange={handleChange}
                    name="weight"
                  />

                  <Image
                    src={correct}
                    height={18}
                    width={18}
                    alt="not loaded"
                    className=" ml-2"
                    onClick={handleChangeWeight}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-2/3">
          <div className=" w-3/5 h-2/4 rounded-2xl p-3 bg-[#4C5B67] border-2">
            <div className=" text-2xl">Favourite Regions</div>
            {userData.favourite_regions &&
              userData.favourite_regions.map((curr) => {
                <div className=" h-1/6 ">{curr}</div>;
              })}
            <div
              className=" rounded-2xl h-1/6 border w-fit pl-3 pr-3"
              onClick={handleisAddClicked}
            >
              add +
            </div>
            {isAddClicked && (
              <select
                value={FavRegion}
                onChange={handleFavRegionChange}
                className=" bg-black"
              >
                <option value="">Select an option</option>
                {Regions.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className=" w-3/5 h-2/4 rounded-2xl p-3 bg-[#4C5B67] mt-2 border-2">
            <div className=" text-2xl">Allergic Ingredients</div>
            {userData.favourite_regions &&
              userData.favourite_regions.map((curr) => {
                <div className=" h-1/6 ">{curr}</div>;
              })}
            <div className=" rounded-2xl h-1/6 border w-fit pl-3 pr-3">
              add +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
