import React, { useState } from "react";



export default function Cuisines() {
    const [recipe, setRecipe] = useState(null);
    

        fetchData();
        async function fetchData() {
            const bearerToken = await fetchBearerToken();
            const recipeData = await fetchRecipeOfTheDay(bearerToken);
            console.log(recipeData);
            setRecipe(recipeData);
            console.log(recipeData.calories)

    return (
        <div>
            {recipeData ? (
                <>
                    <h2>{recipeData.recipe_title}</h2>
                    <img src={recipeData.img_url} alt={recipeData.recipe_title} style={{ maxWidth: "100%" }} />

                    <div>
                        <h3>Recipe Details</h3>
                        <p>Prep Time: {recipeData.prep_time} minutes</p>
                        <p>Cook Time: {recipeData.cook_time} minutes</p>
                        <p>Total Time: {recipeData.total_time} minutes</p>
                        <p>Servings: {recipeData.servings}</p>
                        {/* Add more details as needed */}
                    </div>

                    <div>
                        <h3>Nutritional Information</h3>
                        <p>Calories: {recipeData.calories}</p>
                        <p>Protein: {recipeData.protein}g</p>
                        <p>Carbohydrates: {recipeData.carbohydratebydifference}g</p>
                        <p>Fat: {recipeData.totallipidfat}g</p>
                        {/* Add more nutritional information as needed */}
                    </div>

                    <div>
                        <h3>Ingredients</h3>
                        {/* Assuming there is an array of ingredients in your data */}
                        <ul>
                            {recipeData.ingredients && recipeData.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3>Instructions</h3>
                        {/* Assuming there is an array of processes/steps in your data */}
                        <ol>
                            {recipeData.processes && recipeData.processes.split("||").map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
}

async function fetchBearerToken() {
    console.log("Fetching Bearer Token");

    const tokenUrl = "https://cosylab.iiitd.edu.in/api/auth/realms/bootadmin/protocol/openid-connect/token";

    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: "app-ims",       
            grant_type: "password",     
            username: "monsoon23",      
            password: "cosylab_monsoon",
            scope: "openid",            
        }),
    });

    if (!response.ok) {
        return response; 
    }
    

    const data = await response.json();
    return data.access_token;
}

async function fetchRecipeOfTheDay(bearerToken) {
    console.log("Fetching Recipe of the Day");

    const recipeUrl = "https://cosylab.iiitd.edu.in/api/recipeDB/recipeoftheday/";

    const response = await fetch(recipeUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch recipe of the day");
    }

    const data = await response.json();
    return data;
}