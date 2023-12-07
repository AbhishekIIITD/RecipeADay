import React, { useState, useEffect } from "react";
import styles from "../../styles/profile.module.scss";
import { useRouter } from "next/dist/client/router";
import avatar from "../../../public/ProfileAvatar.png";
import Image from "next/image";
import settingsPng from "../../assets/cogwheel.png";
import correct from "../../assets/correct.png";
import { Regions, Ingredients } from "@/assets/region";
const Profile = () => {
  const router = useRouter();

  //console.log(Regions)
  const { email, user, userImage } = router.query;
  // Retrieve email from the query parameters
  //console.log(router.query)
  const [changeHeight, setChangeHeight] = useState(false);
  const [changeWeight, setChangeWeight] = useState(false);
  const [FavRegion, setFavRegion] = useState();
  const [Allergy, setAllergy] = useState();
  const [HeightValue, setHeightValue] = useState(0);
  const [WeightValue, setWeightValue] = useState(0);
  const [isAddClicked, setisAddClicked] = useState(false);
  const [isAdd2Clicked, setisAdd2Clicked] = useState(false);
  const [isVeg, setIsVeg] = useState(true);

  const handleSliderChange = () => {
    setIsVeg(!isVeg);
    userData.vegNonVeg = (!isVeg) ? ("vegetarian") : ("non-vegetarian");
    handleSubmit();
    console.log(userData);
  };

  function handleChangeHeight() {
    handleSubmit();
    setChangeHeight((prevState) => !prevState);
  }
  function handleChangeWeight() {
    handleSubmit();
    setChangeWeight((prevState) => !prevState);
  }
  function handleisAddClicked() {
    isAddClicked ? setisAddClicked(false) : setisAddClicked(true);
  }

  function handleisAdd2Clicked() {
    isAdd2Clicked ? setisAdd2Clicked(false) : setisAdd2Clicked(true);
  }
  // function handleHeightValue(e) {
  //   setHeightValue(e.target.vaue);
  // }
  // function handleWeightValue(e) {
  //   setWeightValue(e.target.value);
  // }

  const [userData, setUserData] = useState({
    name: user,
    email: email,
    height: "",
    vegNonVeg: "",
    weight: "",
    favourite_regions: [],
    AllergicTo: [],
    Age: "",
  });

  const handleFavRegionChange = (e) => {
    //console.log(userData)
    const { value } = e.target;
    setFavRegion(value);
    var PrevFavRegion;
    if (!userData.hasOwnProperty("favourite_regions")) {
      PrevFavRegion = [];
      PrevFavRegion.push(value);
      setUserData((prev) => ({
        ...prev,
        favourite_regions: PrevFavRegion,
      }));
      //console.log(userData)
    } else {
      PrevFavRegion = userData.favourite_regions;
      PrevFavRegion.push(value);

      setUserData((prev) => ({
        ...prev,
        ["favourite_regions"]: PrevFavRegion,
      }));
      //console.log(userData)
    }
    setisAddClicked(false);

    handleSubmit();
  };

  const handleAllergicToChange = (e) => {
    console.log(userData);
    const { value } = e.target;
    setAllergy(value);
    var PrevAllergicTo;
    if (
      !userData.hasOwnProperty("AllergicTo") ||
      (userData.hasOwnProperty("AllergicTo") && userData.AllergicTo == null)
    ) {
      PrevAllergicTo = [];
      PrevAllergicTo.push(value);
      setUserData((prev) => ({
        ...prev,
        AllergicTo: PrevAllergicTo,
      }));
      //console.log(userData)
    } else {
      PrevAllergicTo = userData.AllergicTo;
      PrevAllergicTo.push(value);

      setUserData((prev) => ({
        ...prev,
        ["AllergicTo"]: PrevAllergicTo,
      }));
      //console.log(userData)
    }
    setisAdd2Clicked(false);

    handleSubmit();
  };

  const DeleteFavRegion = (curr) => {
    const newFavRegion = userData.favourite_regions.filter(
      (item) => item !== curr
    );
    setUserData((prev) => ({
      ...prev,
      favourite_regions: newFavRegion,
    }));
    handleSubmit();
  };

  const DeleteAllergy = (curr) => {
    const newAllergy = userData.AllergicTo.filter((item) => item !== curr);
    setUserData((prev) => ({
      ...prev,
      AllergicTo: newAllergy,
    }));
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
      <div className=" flex sm:flex-col lg:flex-row mt-4 ">
        <div className=" flex flex-col lg:w-1/3">
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
            <div className=" text-xl">email</div>
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
                    className=" lg:w-1/3 bg-black border rounded-xl"
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
          <div
              className={
                styles.sliderContainer +
                " flex flex-row w-fit translate-x-4 mt-4"
              }
            >
              <div className={styles.sliderLabel + " text-l"}>Non-Veg</div>
              <input
                type="checkbox"
                checked={isVeg}
                onChange={handleSliderChange}
                className={styles.slider}
                id="vegSlider"
              />
            </div>
        </div>

        <div className=" flex flex-col lg:w-2/3">
          <div className=" lg:w-3/5 lg:h-2/4 rounded-2xl p-3 bg-[#4C5B67] border-2">
            <div className=" text-2xl">Favourite Regions</div>
            {userData.favourite_regions != undefined &&
              userData.favourite_regions.map((curr, index) => {
                return (
                  <div key={index} className=" rounded-2xl h-1/6 border w-fit pl-3 pr-3 inline-block m-1">
                    {curr}{" "}
                    <button
                      className=" font-bold text-red-600"
                      onClick={() => DeleteFavRegion(curr)}
                    >
                      x
                    </button>
                  </div>
                );
              })}
            <div
              className=" rounded-2xl h-1/6 border w-fit pl-3 pr-3 inline-block bg-[#3ea79d]"
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
                {Regions.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className=" lg:w-3/5 lg:h-2/4 rounded-2xl p-3 bg-[#4C5B67] mt-2 border-2">
            <div className=" text-2xl">Allergic Ingredients</div>
            {userData.AllergicTo != undefined &&
              userData.AllergicTo.map((curr, index) => {
                {
                  /* {
                  console.log("yay");
                } */
                }
                return (
                  <div key={index} className=" rounded-2xl h-1/6 border w-fit pl-3 pr-3 inline-block m-1">
                    {curr}{" "}
                    <button
                      className=" font-bold text-red-600"
                      onClick={() => DeleteAllergy(curr)}
                    >
                      x
                    </button>
                  </div>
                );
              })}
            <div
              className=" rounded-2xl h-1/6 border w-fit pl-3 pr-3 bg-[#3ea79d]"
              onClick={handleisAdd2Clicked}
            >
              add +
            </div>
            {isAdd2Clicked && (
              <select
                value={Allergy}
                onChange={handleAllergicToChange}
                className=" bg-black"
              >
                <option value="">Select an option</option>
                {Ingredients.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;