import { handleClientScriptLoad } from "next/script"
import styles from "../../styles/search.module.scss"
import { useState } from "react"
export default function Search() {
  const [Region,SetRegion]=useState("");
  const [SubRegion,SetSubRegion]=useState("");
  const [Recipe,SetRecipe]=useState("");

  const handleRegion=(event)=>{
    SetRegion(event.target.value);
  }
  const handleSubRegion=(event)=>{
    SetSubRegion(event.target.value);
  }
  const handleRecipe=(event)=>{
    SetRecipe(event.target.value);
  }
  function handleSubmit(){
    

  }

  return (

    <div className={styles.Search+" mt-40 h-screen flex flex-col text-center" }>
      <div className=" text-4xl mb-12">
        <button onClick={handleSubmit} className=" rounded-md bg-slate-700 pl-3 pr-7 pt-3 pb-3 mt-12 hover:scale-110"><img className=" h-10 w-auto inline-block mb-2" src="/search.png"></img>Search</button>
      </div>
      <div className=" flex flex-row justify-evenly w-full mb-6">
        <div className=" flex flex-col align-middle justify-center text-center mt-24">
        <div className=" text-2xl mb-6">Region</div>
        <input className=" border-b border-white bg-transparent focus:border-blue-500 outline-none w-80" type="text" name="Region" onChange={handleRegion}></input>
        </div>
        <div className=" flex flex-col align-middle justify-center text-center mt-24">
        <div className=" text-2xl mb-6">SubRegion</div>
        <input className=" border-b border-white bg-transparent focus:border-blue-500 outline-none w-80" type="text" name="SubRegion" onChange={handleSubRegion}></input>
        </div>
        <div className=" flex flex-col align-middle justify-center text-center mt-24">
        <div className=" text-2xl mb-6">recipe_title</div>
        <input className=" border-b border-white bg-transparent focus:border-blue-500 outline-none w-80" type="text" name="Recipe" onChange={handleRecipe}></input>
        </div>

      </div>
    </div>
  )
}
