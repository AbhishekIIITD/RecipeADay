import React, { useEffect, useState } from "react";
import { fetchBearerToken, fetchRecipeOfTheDay } from "@/pages/api/auth/recipedb";
import { GetStaticProps } from "next";
import CuisineCard from "./cuisineCard";

export default function Cuisines({ recipeHistory }) {
    //console.log(email);
    console.log(recipeHistory)
    

    return (
        <div className="  pt-10 pl-28 mb-10 text-black w-full">
            {recipeHistory ? (
                <div>
                <div className=" text-3xl text-white mb-6 pl-10">Recipe History</div>
                <div className=" flex flex-row justify-evenly">
                    {recipeHistory.map((recipe)=>{
                        return(
                            <div className=" w-1/4">
                            <CuisineCard recipe={recipe} />
                            </div>
                            
                        )
                    })}
                </div>
    
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}


