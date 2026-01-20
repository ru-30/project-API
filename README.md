# 🍳 Recipe App

A modern, full-featured recipe discovery and management application built with React, TypeScript, and Redux Toolkit. Users can browse, search, and manage recipes with a beautiful, responsive interface.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)

---

## 🎯 Features

### User Authentication
- **Secure Login** - Email/password authentication with JWT tokens
- **Session Management** - Persistent authentication with localStorage
- **Protected Routes** - Dashboard only accessible to authenticated users
- **Auto-logout** - Invalid/expired tokens trigger automatic logout

### Recipe Discovery
- **Browse Recipes** - Explore thousands of recipes from the DummyJSON API
- **Advanced Search** - Search recipes by name, ingredients, or cuisine
- **Sorting & Filtering** - Sort by prep time, difficulty, calories, and more
- **Pagination** - Navigate through results efficiently with page controls
- **Recipe Details** - View complete recipe information including ingredients and instructions

### Recipe Management (Dashboard)
- **Create Recipes** - Add your own recipes with custom ingredients and instructions
- **Edit Recipes** - Modify existing recipes
- **Delete Recipes** - Remove recipes with confirmation
- **Real-time Updates** - Changes immediately reflected in the UI

### User Interface
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Accessible Components** - ARIA labels and semantic HTML for screen readers
- **Loading States** - Spinner indicators for async operations
- **Error Handling** - User-friendly error messages
- **Professional Styling** - Clean, modern CSS with smooth transitions

---

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.2** - Modern UI library with hooks
- **TypeScript 5.0** - Type-safe JavaScript
- **Vite 7.3** - Fast build tool and development server

### State Management & API
- **Redux Toolkit** - Simplified Redux state management
- **Redux Toolkit Query (RTK Query)** - Powerful data fetching and caching
- **React Context API** - Authentication state management

### Routing & Navigation
- **React Router v6** - Client-side routing with protected routes

### Code Quality
- **ESLint** - Code linting and style enforcement
- **TypeScript Strict Mode** - Strict type checking

### Styling
- **CSS3** - Custom styling with modern features
- **Responsive Design** - Mobile-first approach

### API
- **DummyJSON API** - Mock API for recipes and authentication
- **Fetch API** - HTTP requests

---

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Hero.tsx            # Landing page hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── PrivateRoute.tsx    # Protected route wrapper
│   ├── RecipeCard.tsx      # Recipe display card
│   └── RecipeForm.tsx      # Recipe creation/edit form
├── context/                # React Context
│   └── AuthContext.tsx     # Authentication state management
├── features/               # Feature-specific modules
│   ├── auth/
│   │   └── authSlice.ts   # Redux auth reducer
│   └── recipes/
│       └── recipesApi.ts   # RTK Query recipes API
├── hooks/                  # Custom React hooks
│   └── useAuth.ts         # Auth context hook
├── pages/                  # Page components
│   ├── Dashboard.tsx      # User dashboard
│   ├── LandingPage.tsx    # Home page
│   └── Login.tsx          # Login page
├── store/                  # Redux store
│   └── store.ts           # Store configuration
├── types/                  # TypeScript definitions
│   └── api.types.ts       # API type definitions
├── App.tsx                 # Root component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ru-30/project-API.git
   cd project-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🔐 Authentication

### Test Credentials
For testing the app with the DummyJSON API, use any of these credentials:

- **Username**: `emilys` | **Password**: `emilyspass`
- **Username**: `sophiab` | **Password**: `sophiabpass`
- **Username**: `michaelw` | **Password**: `michaelwpass`

[View all available test users](https://dummyjson.com/docs/users)

---

## 📋 Usage Examples

### Browse Recipes
1. Visit the home page
2. View featured recipes in the hero section
3. Use the search bar to find specific recipes
4. Sort by difficulty, prep time, or calories
5. Click on pagination buttons to browse more recipes

### Login & Dashboard
1. Click "Login" button in the navbar
2. Enter test credentials from the credentials section
3. Access your dashboard with create/edit/delete functionality
4. Manage your personal recipe collection

### Create a Recipe
1. Go to Dashboard
2. Click "+ Create Recipe"
3. Fill in recipe details:
   - Name, cuisine, difficulty level
   - Prep/cook times and servings
   - Ingredients and instructions
   - Tags and image URL
4. Click "Create Recipe"

---

## 🔄 API Integration

The app uses **Redux Toolkit Query (RTK Query)** for all API calls:

### Recipe API (`recipesApi.ts`)
- `getRecipes()` - Fetch recipes with pagination and search
- `getRecipeById()` - Fetch single recipe details
- `createRecipe()` - Create new recipe
- `updateRecipe()` - Update existing recipe
- `deleteRecipe()` - Delete recipe

### Authentication
- Login via DummyJSON Auth API
- Token stored in localStorage
- Automatic session restoration on app load

---

## 🎨 Path Aliases

The project uses TypeScript path aliases for clean imports:

```typescript
// Instead of:
import { useAuth } from '../../../hooks/useAuth';

// Use:
import { useAuth } from '@/hooks/useAuth';
```

**Available aliases:**
- `@/components/*` - Component modules
- `@/features/*` - Feature-specific code
- `@/hooks/*` - Custom hooks
- `@/store/*` - Redux store
- `@/types/*` - TypeScript definitions
- `@/utils/*` - Utility functions

---

## 📦 Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.x
- @reduxjs/toolkit: ^2.x
- react-redux: ^8.x

### Dev Tools
- typescript: ~5.0.0
- vite: ^7.3.1
- eslint: ^9.x
- @typescript-eslint/eslint-plugin: ^8.x

---

## 🚢 Deployment

### Deployed at Vercel
🔗 **Live Demo**: [Recipe App on Vercel](https://recipe-app-coral.vercel.app)

### Deploy Your Own
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel automatically deploys on every push to main branch

#### Environment Variables (if needed)
```bash
VITE_API_BASE_URL=https://dummyjson.com
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run build
```

### Authentication Issues
- Ensure localStorage is enabled in browser
- Check browser console for JWT token
- Try logging in with test credentials

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Recipe App Developer**
- GitHub: [@ru-30](https://github.com/ru-30)
- Project: [Recipe API](https://github.com/ru-30/project-API)

---

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com) - Mock API provider
- [Vercel](https://vercel.com) - Hosting platform
- [Redux Toolkit](https://redux-toolkit.js.org) - State management
- React and TypeScript communities

---

## 📞 Support

For support, please:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include error messages and steps to reproduce

**Last Updated**: January 2026  
**Version**: 1.0.0
