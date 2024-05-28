const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await User.create({ username, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al registrar el usuario' });
    }
});

module.exports = router;
