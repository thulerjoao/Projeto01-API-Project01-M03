const route = require('express').Router();
const controllerJordans = require('../controllers/jordan.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json')

const {
  validId,
  validObjectBody,
} = require('../middlewares/jordan.middleware');

route.use('api-docs', swaggerUi.serve)
route.get('api-docs', swaggerUi.setup(swaggerDocument))

route.get('/all-jordans', controllerJordans.findAllJordansController);
route.get(
  '/one-jordan/:id',
  validId,
  controllerJordans.findByIdJordanController,
);
route.post(
  '/create-jordan',
  validObjectBody,
  controllerJordans.createJordanController,
);
route.put(
  '/update-jordan/:id',
  validId,
  validObjectBody,
  controllerJordans.updateJordanController,
);
route.delete(
  '/delete-jordan/:id',
  validId,
  controllerJordans.deleteJordanController,
);

module.exports = route;
