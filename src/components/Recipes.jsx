import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {
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
                    recipe.map(recipe => <div key={recipe.recipe_id} className="card bg-base-100  shadow-xl">
                        <figure className="px-8 pt-10">
                            <img className="w-full md:h-80 rounded-2xl"
                                src={recipe.recipe_image}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{recipe.recipe_name}</h2>
                            <p>{recipe.short_description}</p>
                            <h3>Ingredients: {recipe.ingredients.length}</h3>


                            <ul className="">
                                {
                                    recipe.ingredients.map((item, idx) => <li className="list-disc text-gray-600 ml-8" key={idx}>{item}</li>
                                    )
                                }

                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Recipes;