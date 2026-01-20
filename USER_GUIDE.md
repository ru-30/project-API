# Recipe App - User Guide

## 🎯 Application Overview

This is a full-featured Recipe Application with the following capabilities:

### ✨ Key Features

1. **Landing Page with Hero Section**
   - Beautiful gradient hero banner
   - Dynamic call-to-action based on login status
   - Smooth scrolling navigation

2. **Recipe Browse & Search**
   - Browse recipes from DummyJSON API
   - Search functionality
   - Advanced sorting options
   - Pagination support

3. **User Authentication**
   - Secure login system
   - JWT token management
   - Protected routes for authenticated users

4. **Recipe Dashboard (CRUD Operations)**
   - Create new recipes
   - Update existing recipes
   - Delete recipes
   - Only available to authenticated users

---

## 🚀 Getting Started

### Running the Application

The application is already running on: **http://localhost:5175**

If you need to restart it:
```bash
npm run dev
```

---

## 🔑 Demo Login

To access the Dashboard and CRUD features:

**Username:** `emilys`  
**Password:** `emilyspass`

These credentials are provided by the DummyJSON API for testing.

---

## 📖 How to Use

### 1. Landing Page Features

#### Browse Recipes
- Scroll down to see the recipe gallery
- Each card shows:
  - Recipe image
  - Difficulty level
  - Prep and cook time
  - Servings and calories
  - Cuisine type
  - Tags

#### Search Recipes
- Use the search bar at the top of the recipes section
- Type any keyword (recipe name, ingredient, etc.)
- Click "Search" or press Enter
- Results update automatically

#### Sort Recipes
- Use the dropdown menus to sort by:
  - **Name**: Alphabetical order
  - **Prep Time**: Fastest to slowest (or reverse)
  - **Cook Time**: Quickest to longest (or reverse)
  - **Difficulty**: Easy to Hard (or reverse)
  - **Calories**: Lowest to highest (or reverse)
- Choose **Ascending** or **Descending** order
- Sorting applies immediately

#### Navigate Pages
- Use "Previous" and "Next" buttons at the bottom
- Current page and total pages are displayed
- 9 recipes per page

### 2. Login

1. Click "Login" in the navigation bar
2. Enter credentials:
   - Username: `emilys`
   - Password: `emilyspass`
3. Click "Login" button
4. You'll be redirected to the Dashboard

### 3. Dashboard - Recipe Management

Once logged in, you can access the Dashboard to manage recipes.

#### Create a New Recipe

1. Click the "**+ Create Recipe**" button at the top
2. Fill in the form:
   - **Required fields**:
     - Recipe Name
     - Cuisine
     - Difficulty (Easy/Medium/Hard)
     - Servings
     - Prep Time (minutes)
     - Cook Time (minutes)
     - Calories per Serving
     - Ingredients (one per line)
     - Instructions (one per line)
   - **Optional fields**:
     - Image URL
     - Tags (comma-separated)
3. Click "**Create Recipe**"
4. The new recipe will appear at the top of the list

**Example Recipe Data:**
```
Name: Chocolate Chip Cookies
Cuisine: American
Difficulty: Easy
Servings: 24
Prep Time: 15
Cook Time: 12
Calories: 150
Tags: dessert, baking, sweet
Ingredients:
2 1/4 cups all-purpose flour
1 tsp baking soda
1 cup butter, softened
3/4 cup sugar
2 eggs
2 cups chocolate chips

Instructions:
Preheat oven to 375°F
Mix flour and baking soda in a bowl
Cream butter and sugar
Add eggs and mix well
Stir in flour mixture
Fold in chocolate chips
Drop spoonfuls on baking sheet
Bake for 10-12 minutes
```

#### Update a Recipe

1. Find the recipe you want to edit
2. Click the "**Edit**" button below the recipe card
3. The form will open with pre-filled data
4. Make your changes
5. Click "**Update Recipe**"
6. Changes are saved immediately

#### Delete a Recipe

1. Find the recipe you want to remove
2. Click the "**Delete**" button below the recipe card
3. Confirm the deletion in the popup dialog
4. The recipe will be removed from the list

### 4. User Profile

Once logged in, your profile information appears in the navigation bar:
- Your first name is displayed (e.g., "Hello, Emily!")
- On the Dashboard, you'll see:
  - Your full name
  - Your email address

---

## 🎨 Features in Detail

### Search Functionality
- **Real-time**: Results update as you search
- **Smart**: Searches recipe names, ingredients, and descriptions
- **Combined**: Works with sorting and pagination

### Sorting Options

| Sort Field | What It Does |
|-----------|--------------|
| **Name** | Sorts recipes alphabetically by name |
| **Prep Time** | Orders by preparation time (shortest/longest first) |
| **Cook Time** | Orders by cooking duration (quickest/longest first) |
| **Difficulty** | Sorts by complexity (Easy → Medium → Hard) |
| **Calories** | Orders by calorie count (lowest/highest first) |

### Pagination
- Shows 9 recipes per page
- "Previous" button disabled on first page
- "Next" button disabled on last page
- Page counter shows current position

### Form Validation
- Required fields are marked with *
- Number fields only accept positive numbers
- URLs must be valid format
- Multi-line fields (ingredients, instructions) accept line breaks

---

## 🔒 Authentication & Security

### Protected Routes
- Dashboard is **only accessible when logged in**
- Attempting to access `/dashboard` without login redirects to login page
- Login status persists across page refreshes (stored in localStorage)

### Token Management
- JWT token stored securely in localStorage
- Token included in all authenticated API requests
- Automatic logout on token expiration
- Token validated with `/auth/me` endpoint

### Logout
- Click "**Logout**" in the navigation bar
- Redirects to home page
- Clears authentication token
- Removes user session

---

## 📱 Responsive Design

The app works on all device sizes:
- **Desktop**: Full layout with side-by-side hero
- **Tablet**: Stacked sections, touch-friendly buttons
- **Mobile**: Single column, optimized for small screens

---

## 🛠️ API Endpoints Used

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/recipes` | GET | Fetch all recipes |
| `/recipes/search?q={query}` | GET | Search recipes |
| `/recipes?sortBy={field}&order={asc\|desc}` | GET | Sort recipes |
| `/auth/login` | POST | User login |
| `/auth/me` | GET | Get user profile |
| `/recipes/add` | POST | Create recipe |
| `/recipes/{id}` | PUT | Update recipe |
| `/recipes/{id}` | DELETE | Delete recipe |

**Base URL**: `https://dummyjson.com`

---

## 💡 Tips & Tricks

1. **Quick Search**: Press Enter after typing in the search box
2. **Reset Search**: Clear the search field and search again to see all recipes
3. **Multiple Filters**: Combine search + sort for precise results
4. **Form Tips**: 
   - Use line breaks in ingredients/instructions for better formatting
   - Separate tags with commas
   - Use descriptive recipe names for easier searching

---

## 🐛 Troubleshooting

### Can't see recipes?
- Check your internet connection
- Wait a moment for the API to respond
- Try refreshing the page

### Login not working?
- Make sure you're using the exact credentials: `emilys` / `emilyspass`
- Check for typos (case-sensitive)
- Try refreshing the page

### Changes not saving?
- Note: DummyJSON is a mock API
- Create/Update/Delete operations return success but don't permanently store data
- This is normal behavior for the demo API

### Development server not running?
```bash
# Stop the server (Ctrl+C in terminal)
# Restart with:
npm run dev
```

---

## 🎓 Learning Points

This application demonstrates:
- ✅ React functional components with hooks
- ✅ Context API for state management
- ✅ React Router for navigation
- ✅ Protected routes and authentication
- ✅ RESTful API integration
- ✅ CRUD operations
- ✅ Form handling and validation
- ✅ Responsive CSS design
- ✅ Modern ES6+ JavaScript

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the console for error messages (F12 in browser)
2. Review the README.md file
3. Verify all dependencies are installed: `npm install`

---

**Enjoy cooking with code! 👨‍🍳👩‍🍳**
