# Recipe App - Full Stack Application

A modern React application for discovering and managing recipes with authentication, CRUD operations, and advanced filtering.

## 🌟 Features

### Landing Page
- **Hero Section**: Eye-catching hero with gradient background and call-to-action buttons
- **Recipe Gallery**: Beautiful grid layout displaying recipes from the API
- **Search Functionality**: Real-time recipe search
- **Advanced Sorting**: Sort recipes by name, prep time, cook time, difficulty, or calories
- **Pagination**: Navigate through multiple pages of recipes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Authentication System
- **Secure Login**: Integration with DummyJSON authentication API
- **Protected Routes**: Dashboard accessible only to authenticated users
- **User Profile**: Display logged-in user information
- **Token Management**: JWT token storage and validation

### Dashboard (Authenticated Users Only)
- **Create Recipes**: Add new recipes with comprehensive form
- **Update Recipes**: Edit existing recipes
- **Delete Recipes**: Remove recipes with confirmation
- **User Profile Display**: Shows logged-in user's name and email
- **Full CRUD Operations**: Complete create, read, update, delete functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:3000
```

## 🔐 Demo Login Credentials

To access the Dashboard, use these credentials:

- **Username**: `emilys`
- **Password**: `emilyspass`

## 📁 Project Structure

```
project/
├── src/
│   ├── components/       # Reusable components
│   ├── context/          # Authentication context
│   ├── pages/            # Page components
│   ├── App.jsx          # Main app with routing
│   └── App.css          # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Key Features

### Search & Filter
- Search recipes by name or ingredients
- Sort by: Name, Prep Time, Cook Time, Difficulty, Calories
- Ascending/Descending order toggle
- Real-time results

### Recipe Management (Dashboard)
- Create new recipes with detailed form
- Edit existing recipes
- Delete with confirmation
- Full form validation

## 🛠️ API Integration

**Base URL**: `https://dummyjson.com`

- `GET /recipes` - Get all recipes
- `GET /recipes/search?q={query}` - Search recipes
- `GET /recipes?sortBy={field}&order={asc|desc}` - Sort recipes
- `POST /auth/login` - User login
- `GET /auth/me` - Get user profile (requires token)
- `POST /recipes/add` - Create recipe (requires auth)
- `PUT /recipes/{id}` - Update recipe (requires auth)
- `DELETE /recipes/{id}` - Delete recipe (requires auth)

## 🎯 Technologies

- React 19
- React Router DOM
- Vite
- Context API
- CSS3

## 📱 Responsive Design

Fully responsive with breakpoints for desktop, tablet, and mobile devices.

## 🚦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

**Enjoy exploring recipes! 🍳✨**


The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
