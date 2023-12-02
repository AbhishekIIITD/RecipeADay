import React, { useEffect, useState } from "react";
import { fetchBearerToken, fetchRecipeOfTheDay } from "@/pages/api/auth/recipedb";
import { GetStaticProps } from "next";

export default function Cuisines({ recipeHistory }) {
    //console.log(email);
    console.log(recipeHistory)
    

    return (
        <div>
            {recipeHistory ? (
                <>
                    
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}


