interface Recipe {
  image: string,
  name: string,
  ingredients: string,
  
}

export function RecipeGrid(recipes) {
  recipes.map((recipe) => {
    return (
      <div className="recipe-grid">
        <img src={recipe.image} alt={recipe.name} />
        <div className="body">
          <h2 className="recipe-name">{recipe.name}</h2>
          <h2 className="recipe-ingredients">
            {recipe.ingredients.subString(0, 180)}
          </h2>
        </div>
      </div>
    );
  });
}