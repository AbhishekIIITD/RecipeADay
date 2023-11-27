import React, { useState } from "react";
import { fetchBearerToken,fetchRecipeOfTheDay } from "@/pages/api/auth/recipedb";


export default function Cuisines({ recipe}) {
    

        

    return (
        <div>
            {recipe ? (
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


export const getStaticProps = async () => {
    const token = await fetchBearerToken();
    const recipe = await fetchRecipeOfTheDay(token);
    return {
      props: { recipe: recipe },
    };
  };
  