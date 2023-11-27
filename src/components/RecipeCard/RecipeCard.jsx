
export default function RecipeCard({recipe}){
    const handleClick=()=>{

    }

    return(
        <div className=" flex flex-col text-center items-center border ml-2 mr-2 hoverChange" >
            
            <div className=" pl-4 pr-4">
                <img src={recipe.img_url} className=" mt-4 w-4/5 translate-x-9 border">

                </img>
            </div>
            <div className=" text-xl mt-4 Ephsis">
                {recipe.recipe_title}
            </div>
            <div className=" mt-4">
                <button
                type="submit"
                onClick={handleClick}
                className=" mt-2 text-black pl-4 pr-4 pt-2 pb-2 rounded mb-4 hover:rounded-lg hover:scale-110 font-bold bg-[#3ea79d]"
                >
                Tasty!
                </button>
            </div>
        </div>
    )
}