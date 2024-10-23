import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
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
        <Recipes></Recipes>
        {/* Sidebar */}
        <Sidebar></Sidebar>

      </section>
    </div>
  );
};

export default App;