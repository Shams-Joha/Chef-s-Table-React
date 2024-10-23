import { useEffect } from "react";
import { useState } from "react";


const Recipes = ({ addReciepeToQueue }) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])


    return (
        <div className="md:w-2/3 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    recipe.map(recipe => <div key={recipe.recipe_id} className="card bg-base-100  border-2">
                        <figure className="px-8 pt-10">
                            <img className="w-full md:h-80 rounded-2xl"
                                src={recipe.recipe_image}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">{recipe.recipe_name}</h2>
                            <p>{recipe.short_description}</p>
                            <h3>Ingredients: {recipe.ingredients.length}</h3>


                            <ul className="">
                                {
                                    recipe.ingredients.map((item, idx) => <li className="list-disc
                                     text-gray-600 ml-8" key={idx}>{item}</li>
                                    )
                                }

                            </ul>
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                                    <p className=" flex items-center">{recipe.preparing_time}</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                                    <p className=" flex items-center">{recipe.calories}</p>
                                </div>
                            </div>

                            <div className="card-actions">
                                <button onClick={() => { addReciepeToQueue(recipe) }} className="btn rounded-full bg-green-400 text-lg
                                 text-gray-800 mt-6 px-8 font-medium">Want to Cook</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Recipes;