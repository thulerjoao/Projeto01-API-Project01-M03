const router = require('express').router();
const controllerJordans = require('../controllers/jordan.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json')

const {
  validId,
  validObjectBody,
} = require('../middlewares/jordan.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-jordans', controllerJordans.findAllJordansController);
router.get(
  '/one-jordan/:id',
  validId,
  controllerJordans.findByIdJordanController,
);
router.post(
  '/create-jordan',
  validObjectBody,
  controllerJordans.createJordanController,
);
router.put(
  '/update-jordan/:id',
  validId,
  validObjectBody,
  controllerJordans.updateJordanController,
);
router.delete(
  '/delete-jordan/:id',
  validId,
  controllerJordans.deleteJordanController,
);

module.exports = router;
