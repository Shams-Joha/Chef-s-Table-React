import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const [preparedRecipe, setPreparedRecipe] = useState([]);

  // state for time and calorie counting

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setTotalCalorie] = useState(0);



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

  const handleRemove = (id) => {
    // Find which recipe to remove
    const deletedRecipe = recipeQueue.find(
      recipe => recipe.recipe_id === id
    )
    // Remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])

  }

  const calculateTimeAndCalories = (time, calories) => {
    console.log(calories);
    setTotalTime(totalTime + time);
    setTotalCalorie(totalCalorie + calories);
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
        <Sidebar totalTime={totalTime} totalCalorie={totalCalorie} calculateTimeAndCalories={calculateTimeAndCalories}
          recipeQueue={recipeQueue} handleRemove={handleRemove} preparedRecipe={preparedRecipe}></Sidebar>

      </section>
    </div>
  );
};

export default App;