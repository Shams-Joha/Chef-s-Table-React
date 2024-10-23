

const Sidebar = ({ recipeQueue }) => {
    const [recipe_image] = recipeQueue;
    return (
        <div className="md:w-1/3">
            <div className="grid grid-cols-3 gap-5">
                {
                    recipeQueue.map((item, index) => <img className="w-48 h-48 rounded-lg" key={index} src={item.recipe_image} alt="" />)
                }
            </div>


        </div>
    );
};

export default Sidebar;