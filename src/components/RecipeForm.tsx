import { useState } from 'react';
import type { Recipe, CreateRecipeRequest } from '../types/api.types';

function RecipeForm({ recipe, onSubmit, onCancel }: { 
  recipe?: Recipe | null;
  onSubmit: (data: CreateRecipeRequest) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    name: recipe?.name || '',
    cuisine: recipe?.cuisine || '',
    difficulty: recipe?.difficulty || 'Easy',
    prepTimeMinutes: recipe?.prepTimeMinutes || '',
    cookTimeMinutes: recipe?.cookTimeMinutes || '',
    servings: recipe?.servings || '',
    caloriesPerServing: recipe?.caloriesPerServing || '',
    image: recipe?.image || 'https://cdn.dummyjson.com/recipe-images/1.webp',
    tags: recipe?.tags?.join(', ') || '',
    ingredients: recipe?.ingredients?.join('\n') || '',
    instructions: recipe?.instructions?.join('\n') || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const recipeData: CreateRecipeRequest = {
      ...formData,
      prepTimeMinutes: parseInt(formData.prepTimeMinutes as string),
      cookTimeMinutes: parseInt(formData.cookTimeMinutes as string),
      servings: parseInt(formData.servings as string),
      caloriesPerServing: parseInt(formData.caloriesPerServing as string),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      ingredients: formData.ingredients.split('\n').filter(Boolean),
      instructions: formData.instructions.split('\n').filter(Boolean)
    };

    onSubmit(recipeData);
  };

  return (
    <div className="recipe-form-container">
      <h2>{recipe ? 'Edit Recipe' : 'Create New Recipe'}</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Recipe Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cuisine">Cuisine *</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty *</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="servings">Servings *</label>
            <input
              type="number"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="prepTimeMinutes">Prep Time (minutes) *</label>
            <input
              type="number"
              id="prepTimeMinutes"
              name="prepTimeMinutes"
              value={formData.prepTimeMinutes}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cookTimeMinutes">Cook Time (minutes) *</label>
            <input
              type="number"
              id="cookTimeMinutes"
              name="cookTimeMinutes"
              value={formData.cookTimeMinutes}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="caloriesPerServing">Calories per Serving *</label>
            <input
              type="number"
              id="caloriesPerServing"
              name="caloriesPerServing"
              value={formData.caloriesPerServing}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g., vegetarian, quick, healthy"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (one per line) *</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients as string}
            onChange={handleChange}
            required
            rows={6}
            placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions (one per line) *</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions as string}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients"
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="btn btn-outline">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {recipe ? 'Update Recipe' : 'Create Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
