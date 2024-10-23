import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addReciepeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if (!isExist) {
      const newRecipes = [...recipeQueue, recipe];
      setRecipeQueue(newRecipes);
    }
    else {
      alert('Recipe already exists in the queue.')
    }



  }




  return (
    <div className="container mx-auto px-4">
      {/* Header or navbar goes here */}
      <Header></Header>
      {/* Banner Goes Here */}
      <Banner></Banner>
      {/* Our Recipes Section Goes here */}
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes addReciepeToQueue={addReciepeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>

      </section>
    </div>
  );
};

export default App;