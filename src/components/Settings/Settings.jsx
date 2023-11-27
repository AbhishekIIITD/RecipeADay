import { useState } from "react";
import styles from "../../styles/userPersonalisation.module.scss";
import { useRouter } from "next/dist/client/router";
import {data,Regions,subRegions,continents} from "../../assets/region"

export default function Settings() {
  const router = useRouter();
  const { user, email } = router.query;
  const [ContinentValue, setContinentValue] = useState('');
  const [isContinentFocused,setContinentFocused]=useState(false);

  const [options, setOptions] = useState([]);

  

  

  const handleContinentChange = (e) => {
    setContinentValue(e.target.value);
    const filteredInputs=continents.filter(option=>option.includes(ContinentValue))
    setOptions(filteredInputs)
    //console.log(options)
    handleChange(e)
  };

  const handleFocusContinent=(e)=>{
    setContinentFocused(true)
  }

  const handleContinentBlur=(e)=>{
    setContinentFocused(false)
  }
  const [formData, setFormData] = useState({
    userEmail: email || "",
    vegNonVeg: "vegetarian",
    height: "",
    healthIssues: "none",
    weight: "",
    cuisine: "none",
    Age: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Log the formData to ensure it's captured on submit

    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Assuming success means redirecting to a user dashboard
        router.push({
          pathname: "/User_dashboard",
          query: { user: user, email: email },
        });
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.userFormContainer + " text-black mb-6 pb-6"}>
      <h1 className={styles.ArchitectureFont + " text-white text-3xl"}>
        {" "}
        User Information Form{" "}
      </h1>{" "}
      <form onSubmit={handleSubmit}>
        <label className="text-white md-3" htmlFor="vegNonVeg">
          {" "}
          Diet Preference{" "}
        </label>{" "}
        <select
          id="vegNonVeg"
          name="vegNonVeg"
          value={formData.vegNonVeg}
          onChange={handleChange}
          required
        >
          <option value="vegetarian"> Vegetarian </option>{" "}
          <option value="nonvegetarian"> Non - vegetarian </option>{" "}
        </select>
        <label className="text-white md-3" htmlFor="Age">
          {" "}
          Age:{" "}
        </label>{" "}
        <input
          type="number"
          id="Age"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          required
        />
        <label className="text-white md-3" htmlFor="height">
          {" "}
          Height( in cm):{" "}
        </label>{" "}
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />
        <label className="text-white md-3" htmlFor="weight">
          {" "}
          weight( in KG):{" "}
        </label>{" "}
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <label className=" text-white md-3" for="AllergicTo">
          {" "}
          Allergic to:{" "}
        </label>{" "}
        <select
          id="AllergicTo"
          name="AllergicTo"
          value={formData.AllergicTo}
          onChange={handleChange}
          required
        >
          
        </select>
        <label className=" text-white md-3" for="Continent">
          {" "}
          Select Your Preferred Continent:{" "}
        </label>{" "}
        <input className="" type="text" name="Continent" onChange={handleContinentChange} onFocus={handleFocusContinent} onBlur={handleContinentBlur}/>
        {(isContinentFocused)&&(<ul className=" text-white">
        {options.map((option) => (
          <li>{option}</li>
          
        ))}
      </ul>)}
        <input
          className="bg-[#3ea79d] hover:scale-105 rounded-md"
          type="submit"
          value="Submit"
        />
      </form>{" "}
    </div>
  );
}
