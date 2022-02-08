const express = require('express');
const router = express.Router();

// Importar controladores
const userController = require('./controllers/UserController');


 

// Users
router.get('/playlist', userController.getAllUsers);
router.post('/playlist', userController.createUsers); 
router.get('/playlist/:usersId', userController.getUsers);
router.put('/playlist/:usersId', userController.updateUsers);
router.delete('/playlist/:usersId', userController.deleteUsers);

module.exports = router;