const express = require('express');
const app = express();
const port = 3000; // Choose a port for your server

// Middleware to parse JSON data
app.use(express.json());

// Sample menu and recipe data (replace with your database interaction)
const menus = [
    { name: 'Winter Menus', description: 'Comfort recipes' },
    { name: 'Spring Menus', description: 'Vibrant recipes' },
    { name: 'Summer Menus', description: 'Fresh Dishes ' },
    { name: 'Autumn Menus', description: 'Delicious Autumn' },
    { name: 'Custom Menus', description: 'Create yours' },
    // Add more menu objects here
];

const recipes = [];

// Define API endpoints
app.get('/api/menus', (req, res) => {
    res.json(menus);
});

app.post('/api/recipes', (req, res) => {
    const newRecipe = req.body;
    recipes.push(newRecipe);
    res.json({ message: 'Recipe added successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'menu_and_recipes',
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Make the 'db' object available for your routes/endpoints
