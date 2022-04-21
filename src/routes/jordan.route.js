const route = require('express').Router();
const controllerJordans = require('../controllers/jordan.controller');
const {validId, validObjectBody} = require('../middlewares/jordan.middleware')

route.get('/all-jordans', controllerJordans.findAllJordansController);
route.get('/one-jordan/:id', validId, controllerJordans.findByIdJordanController);
route.post('/create-jordan', validObjectBody, controllerJordans.createJordanController);
route.put('/update-jordan/:id', validId, validObjectBody, controllerJordans.updateJordanController);
route.delete('/delete-jordan/:id', validId, controllerJordans.deleteJordanController);

module.exports = route;
