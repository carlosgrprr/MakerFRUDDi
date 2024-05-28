// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sample menu data (replace with data fetched from your server)
    const menus = [
        { name: 'Winter Menus ❄️', description: 'Comfort recipes' },
        { name: 'Spring Menus🌹', description: 'Vibrant recipes' },
        { name: 'Summer Menus ☀️', description: 'Fresh Dishes' },
        { name: 'Autumn Menus🍂', description: 'Delicious Autumn' },
        { name: 'Custom Menus🤓', description: 'Create yours' },
        { name: 'Make your own recipebook 📒', description: 'Add recipes and menus forms'},
        // Add more menu objects here
    ];

    const menuListContainer = document.getElementById('menu-list');

    menus.forEach(menu => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${menu.name}</h3>
            <p>${menu.description}</p>
        `;
        menuListContainer.appendChild(menuItem);
    });
});

// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('recipe-form');
    const recipeListContainer = document.getElementById('recipe-list');
    
    // Sample recipe data (replace with data fetched from your server)
    let recipes = [];

    // Function to display recipes
    function displayRecipes() {
        recipeListContainer.innerHTML = ''; // Clear existing recipes
        
        recipes.forEach((recipe, index) => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
                <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
            `;
            recipeListContainer.appendChild(recipeItem);
        });
    }

    // Handle recipe form submission
    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Add the new recipe to the recipes array (in a real project, you'd send it to the server)
        const newRecipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions,
        };

        recipes.push(newRecipe);
        displayRecipes();

        // Clear the form fields after submission
        recipeForm.reset();
    });

    // Display initial recipes
    displayRecipes();
});

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            document.getElementById('message').innerText = 'Usuario registrado correctamente.';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        } else {
            throw new Error('Error al registrar usuario.');
        }
    } catch (error) {
        console.error(error);
        document.getElementById('message').innerText = 'Hubo un error al registrar el usuario.';
    }
});