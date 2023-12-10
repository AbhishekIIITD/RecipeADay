import React from "react";
import styles from "../styles/index.module.scss";
import GlassCard from "@/components/Glasscard/GlassCard.component";
import DataCard from "@/components/Glasscard/DataCard/DataCard.component";
import Head from "next/head";
import cutleryImg from "../assets/cutlery.png";
import CustomCursor from "@/components/Cursor";
import Contact from "./contact";

import {
  fetchRecipeOfTheDay,
  fetchBearerToken,
  fetchIndianRecipes,
} from "./api/auth/recipedb";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import CuisineCard from "@/components/Cuisines/cuisineCard";
// import "../styles/globals.scss"
import { useRouter } from "next/router";
import Cors from "micro-cors";
import { Image } from "next/dist/client/image-component";
import personalizationLogo from "../assets/personalization.png";
import CommunityLogo from "../assets/collaboration.png";

const cors = Cors();

export default function Index({ recipe, IndianRecipes }) {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/Signup",
    });
  };
  // const recipe=RecipeOfTheDay();
  //console.log(IndianRecipes)

  return (
    <div className=" md:pl-44 md:pr-44">
      <CustomCursor />
      <div className=" pl-4 pr-4  hero">
        <div
          className={
            styles.ArchitectureFont +
            ` mt-36 text-5xl mb-12 ${styles.fadeInUp} `
          }
        >
          Recipe Of The Day
        </div>
        <div
          className={`flex lg:flex-row sm:flex-col justify-between ${styles.fadeInUp}`}
        >
          <div className=" lg:w-2/5 sm:w-full">
            <div className=" text-3xl mb-3">{recipe.recipe_title}</div>
            <div className=" mb-12">
              It is a {recipe.continent} dish from {recipe.region}. It contains{" "}
              {recipe.protein} gram of protein and have {recipe.energykcal}{" "}
              kcal.You can prepare this in {recipe.total_time} minutes and
              enjoy!
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

          <div className=" sm:w-fit sm:mb-10 mt-5 md:w-3/5 md:pl-20">
            <img src={recipe.img_url}></img>
          </div>
        </div>
      </div>
      <div className=" md:mt-16 md:mb-12">
        <div
          className={
            styles.ArchitectureFont + " sm:text-center font-bold text-5xl"
          }
        >
          EXPLORE MORE
        </div>
        <div className=" sm:text-center ">
          From continental to italian... we got it all
        </div>
        <div
          className={` Ephsis italic flex lg:flex-row sm:flex-col mt-10 justify-between align-middle text-black ${styles.fadeInUp}`}
        >
          <div className=" sm:translate-x-[13.5%] md:translate-x-0 md:w-1/4 sm:w-4/5">
            <CuisineCard recipe={IndianRecipes[0]} />
          </div>
          <div className=" sm:translate-x-[13.5%] md:translate-x-0 md:w-1/4 sm:w-4/5">
            <CuisineCard recipe={IndianRecipes[1]} />
          </div>
          <div className=" sm:translate-x-[13.5%] md:translate-x-0 md:w-1/4 sm:w-4/5">
            <CuisineCard recipe={IndianRecipes[2]} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col text-center justify-center md:align-middle mt-9">
        <div className=" flex flex-row text-center justify-center text-4xl font-bold">
          WHO ARE WE?
        </div>

        <div
          className={`flex flex-col md:flex-row justify-evenly items-center mt-8 mb-6 ${styles.fadeInUp}`}
        >
          <div className="flex flex-col items-center sm:mt-5">
            <Image
              src={cutleryImg}
              width={150}
              height={150}
              alt="Cutlery Image"
            />
            <h1 className="w-full text-center">Endless</h1>
            <h1 className="w-full text-center">Recipes</h1>
          </div>
          <div className="flex flex-col items-center sm:mt-5">
            <Image
              src={CommunityLogo}
              width={150}
              height={150}
              alt="Community Logo"
            />
            <h1 className="w-full text-center">Community</h1>
            <h1 className="w-full text-center">Connection</h1>
          </div>
          <div className="flex flex-col items-center sm:mt-5">
            <Image
              src={personalizationLogo}
              width={150}
              height={150}
              alt="Personalization Logo"
            />
            <h1 className="w-full text-center">Personalized</h1>
            <h1 className="w-full text-center">Recipes</h1>
          </div>
        </div>

        <div className="flex justify-center text-justify mt-6 mb-6">
          <div className=" w-[90%]">
            Welcome to our culinary haven, where passion for food meets the art
            of personalized gastronomy! As a dedicated team under Recipe DB, we
            take immense pride in presenting to you our one-of-a-kind website, a
            culinary sanctuary designed to elevate your daily dining experience.
            At the heart of our platform is the commitment to bring joy to your
            kitchen through a daily dose of delectable recipes tailored to your
            unique preferences. We understand that every palate is distinct, and
            that`&apos;`s why our team works tirelessly to curate a diverse
            array of recipes that cater to a myriad of tastes, dietary needs,
            and cultural preferences.So enjoy every minute of taste with work
            and delve into a world of cuisines.(Work Done By RecipeDb team )
          </div>
        </div>
      </div>
      <Contact />
      <script src="https://apis.google.com/js/platform.js" async defer></script>
    </div>
  );
}

export const getStaticProps = async () => {
  const token = await fetchBearerToken();
  const recipe = await fetchRecipeOfTheDay(token);
  const IndianRecipes = await fetchIndianRecipes(token);

  return {
    props: { recipe: recipe, IndianRecipes: IndianRecipes },
  };
};
