const express = require('express');
const controlToRoute = require('../controllers/controller')
const routes = express.Router();


routes.get('/',controlToRoute.defaultController);
routes.post('/addtodo',controlToRoute.todoRun);
routes.get('/edittodo/:id',controlToRoute.editTodoController);
routes.post('/updatetodo/:id',controlToRoute.updateTodoController);
routes.get('/deletetodo/:id', controlToRoute.deleteTodoController);

module.exports = routes;