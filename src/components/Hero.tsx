import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Hero() {
  const { user } = useAuth();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Recipe World</h1>
        <p className="hero-subtitle">
          Discover delicious recipes from around the world. Search, sort, and explore
          thousands of amazing dishes.
        </p>
        <div className="hero-buttons">
          {user ? (
            <Link to="/dashboard" className="btn btn-primary btn-large">
              Go to Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-large">
              Get Started
            </Link>
          )}
          <button className="btn btn-outline btn-large" onClick={() => {
            document.querySelector('.recipes-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Recipes
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-placeholder">
          🍕 🍜 🍰 🥗 🍔
        </div>
      </div>
    </section>
  );
}

export default Hero;
