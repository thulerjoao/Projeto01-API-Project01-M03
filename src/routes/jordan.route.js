const route = require('express').Router();
const controllerJordans = require('../controllers/jordan.controller');

route.get('/todos', controllerJordans.findAllJordansController);
route.get('/jordan/:id', controllerJordans.findByIdJordanController);
route.post('/create', controllerJordans.createJordanController);
route.put('/update/:id', controllerJordans.updateJordanController);
route.delete('/delete/:id', controllerJordans.deleteJordanController);

module.exports = route;
