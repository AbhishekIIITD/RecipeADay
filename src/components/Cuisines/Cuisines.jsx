import React, { useState } from "react";
import { fetchBearerToken, fetchRecipeOfTheDay } from "@/pages/api/auth/recipedb";

export default function Cuisines({ recipe }) {
    console.log(recipe);

    return (
        <div>
            {recipe ? (
                <>
                    <h2>{recipe.recipe_title}</h2>
                    <img src={recipe.img_url} alt={recipe.recipe_title} style={{ maxWidth: "100%" }} />

                    <div>
                        <h3>Recipe Details</h3>
                        <p>Prep Time: {recipe.prep_time} minutes</p>
                        <p>Cook Time: {recipe.cook_time} minutes</p>
                        <p>Total Time: {recipe.total_time} minutes</p>
                        <p>Servings: {recipe.servings}</p>
                        {/* Add more details as needed */}
                    </div>

                    <div>
                        <h3>Nutritional Information</h3>
                        <p>Calories: {recipe.calories}</p>
                        <p>Protein: {recipe.protein}g</p>
                        <p>Carbohydrates: {recipe.carbohydratebydifference}g</p>
                        <p>Fat: {recipe.totallipidfat}g</p>
                        {/* Add more nutritional information as needed */}
                    </div>

                    <div>
                        <h3>Ingredients</h3>
                        {/* Assuming there is an array of ingredients in your data */}
                        <ul>
                            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3>Instructions</h3>
                        {/* Assuming there is an array of processes/steps in your data */}
                        <ol>
                            {recipe.processes && recipe.processes.split("||").map((step, index) => (
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
    console.log("lol");

    return {
        props: { recipe: recipe },
    };
};
