function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
        <span className="recipe-difficulty">{recipe.difficulty}</span>
      </div>
      <div className="recipe-content">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-cuisine">🌍 {recipe.cuisine}</p>
        
        <div className="recipe-info">
          <div className="info-item">
            <span className="info-label">⏱️ Prep:</span>
            <span className="info-value">{recipe.prepTimeMinutes} min</span>
          </div>
          <div className="info-item">
            <span className="info-label">🔥 Cook:</span>
            <span className="info-value">{recipe.cookTimeMinutes} min</span>
          </div>
        </div>
        
        <div className="recipe-meta">
          <span className="meta-item">🍽️ {recipe.servings} servings</span>
          <span className="meta-item">🔥 {recipe.caloriesPerServing} cal</span>
        </div>
        
        <div className="recipe-tags">
          {recipe.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
