const express = require('express');
const router = express.Router();

// Importar controller
const customerController = require('../controllers/customer.controller');

// Rutas - URL enviadas desde el view
router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

// Exportados
module.exports = router;