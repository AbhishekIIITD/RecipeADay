import React from "react";
import styles from "../styles/index.module.scss";
import GlassCard from "@/components/Glasscard/GlassCard.component";
import DataCard from "@/components/Glasscard/DataCard/DataCard.component";
import Head from "next/head";
import { fetchRecipeOfTheDay, fetchBearerToken } from "./api/auth/recipedb";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
// import "../styles/globals.scss"
import { useRouter } from "next/router";
import Cors from "micro-cors";
const cors = Cors();

export default function Index({ recipe }) {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/Signup",
    });
  };
  // const recipe=RecipeOfTheDay();
  console.log(recipe)

  return (
    <div className=" md:pl-44 md:pr-44">
      <div className={styles.ArchitectureFont + " mt-36 text-5xl mb-12 "}>
        Recipe Of The Day
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-between">
        <div className=" sm:w-full lg:w-2/5 sm:w-full">
          <div className=" text-3xl mb-3">{recipe.recipe_title}</div>
          <div className=" mb-12">
            It is a {recipe.continent} dish from {recipe.region}. It contains {recipe.protein} gram of protein
            and have {recipe.energykcal} kcal.You can prepare this in {recipe.total_time} minutes and enjoy!
          </div>
          <div>
            <button
              type="submit"
              onClick={handleClick}
              className=" mt-4 text-black p-4 hover:rounded-lg hover:scale-105 bg-[#3ea79d]"
            >
              Resgister for more
            </button>
          </div>
        </div>

        <div>
          <GlassCard src={recipe.img_url}></GlassCard>
        </div>
      </div>

      <div className=" mt-16 mb-12">
        <div className={styles.ArchitectureFont + " text-5xl"}>
          EXPLORE MORE
        </div>
        <div>From continental to italian... we got it all</div>
        <div className=" flex lg:flex-row sm:flex-col mt-10">
          <RecipeCard recipe={recipe}></RecipeCard>
          <RecipeCard recipe={recipe}></RecipeCard>
          <RecipeCard recipe={recipe}></RecipeCard>
        </div>
      </div>

      <script src="https://apis.google.com/js/platform.js" async defer></script>
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
