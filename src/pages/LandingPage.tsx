import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import RecipeCard from '../components/RecipeCard';

function LandingPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [order, setOrder] = useState('asc');
  
  const limit = 9;

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, searchTerm, sortBy, order]);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const skip = (currentPage - 1) * limit;
      let url = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
      
      if (searchTerm) {
        url = `https://dummyjson.com/recipes/search?q=${searchTerm}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.recipes);
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchRecipes();
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="landing-page">
      <Hero />
      
      <section className="recipes-section">
        <div className="container">
          <h2 className="section-title">Discover Amazing Recipes</h2>
          
          <div className="filters-bar">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
            
            <div className="sort-controls">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="select-input"
              >
                <option value="name">Name</option>
                <option value="prepTimeMinutes">Prep Time</option>
                <option value="cookTimeMinutes">Cook Time</option>
                <option value="difficulty">Difficulty</option>
                <option value="caloriesPerServing">Calories</option>
              </select>
              
              <select 
                value={order} 
                onChange={(e) => setOrder(e.target.value)}
                className="select-input"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading recipes...</p>
            </div>
          ) : (
            <>
              <div className="recipes-grid">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>

              {recipes.length === 0 && (
                <div className="no-results">
                  <p>No recipes found. Try a different search term.</p>
                </div>
              )}

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
      </section>
    </div>
  );
}

export default LandingPage;
