import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';

function Dashboard() {
  const { user, token } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 9;

  useEffect(() => {
    fetchRecipes();
  }, [currentPage]);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const skip = (currentPage - 1) * limit;
      const response = await fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setRecipes(data.recipes);
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (recipeData) => {
    try {
      const response = await fetch('https://dummyjson.com/recipes/add', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(recipeData)
      });

      if (response.ok) {
        const newRecipe = await response.json();
        setRecipes([newRecipe, ...recipes]);
        setShowForm(false);
        alert('Recipe created successfully!');
      }
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('Failed to create recipe');
    }
  };

  const handleUpdate = async (recipeData) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${editingRecipe.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(recipeData)
      });

      if (response.ok) {
        const updatedRecipe = await response.json();
        setRecipes(recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
        setEditingRecipe(null);
        setShowForm(false);
        alert('Recipe updated successfully!');
      }
    } catch (error) {
      console.error('Error updating recipe:', error);
      alert('Failed to update recipe');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) {
      return;
    }

    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setRecipes(recipes.filter(r => r.id !== id));
        alert('Recipe deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
      alert('Failed to delete recipe');
    }
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingRecipe(null);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h1>Recipe Dashboard</h1>
            <p className="user-info">
              Welcome back, <strong>{user?.firstName} {user?.lastName}</strong>! 
              ({user?.email})
            </p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
            disabled={showForm}
          >
            + Create Recipe
          </button>
        </div>

        {showForm && (
          <RecipeForm
            recipe={editingRecipe}
            onSubmit={editingRecipe ? handleUpdate : handleCreate}
            onCancel={handleCancel}
          />
        )}

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading recipes...</p>
          </div>
        ) : (
          <>
            <div className="recipes-grid">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card-wrapper">
                  <RecipeCard recipe={recipe} />
                  <div className="recipe-actions">
                    <button 
                      className="btn btn-small btn-outline"
                      onClick={() => handleEdit(recipe)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-small btn-danger"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="btn btn-outline"
                >
                  Previous
                </button>
                
                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
