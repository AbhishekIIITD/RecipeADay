import Image from "next/image";
import { useState } from "react";
import Star from "../../assets/star.png"
import LikedStar from "../../assets/filledStar.png"
import Like from "../../assets/like.png"
import filledLike from "../../assets/filledLike.png"

export default function CuisineCard({ recipe,width }) {
    const [IsLiked,setIsLiked]=useState(false);
    const handleIsLiked=()=>{
        setIsLiked((prev)=>{
            return (!prev);
        })
    }
  return (
    <div className={`bg-white overflow-hidden rounded-lg mt-5 mb-5 md:mt-0 md:mb-4 sm:h-4/5 lg:pb-2 sm:pb-9`}>
      <img className=" h-3/5 w-full" src={recipe.img_url} />
      <div className=" flex flex-row justify-between mt-6 ml-4 mr-2 h-12">
        
        {(IsLiked)?<Image className="hover:scale-110 ml-3" src={filledLike} height={50} width={50} alt="404" onClick={handleIsLiked} />:<Image className="hover:scale-110 ml-3" src={Like} height={50} width={50} alt="404" onClick={handleIsLiked}/>}
        <div className=" w-1/2">
          <div className=" text-xl font-bold">{recipe.recipe_title}</div>
          <div className=" text-base">{recipe.continent}</div>
        </div>
      </div>
      <div className="top-3 translate-y-6"><button className=" font-extrabold ml-4 pl-3 pr-3 pt-1 pb-1 bg-[#3ea79d] hover:scale-110 hover:bg-green-300 rounded-lg">COOK</button></div>
    </div>
  );
}
