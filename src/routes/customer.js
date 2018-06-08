const express = require('express');
const router = express.Router();

// Direcciones del servidor
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
// Ruta de escucha del formulario
router.get('/Login', customerController.list2);
router.post('/buscar', customerController.buscar);
router.post('/add', customerController.save);
router.get('/delete/:sid', customerController.delete);
router.get('/update/:sid', customerController.edit);
router.post('/update/:sid', customerController.update);
router.post('/addUser', customerController.NewUser);
router.post('/Verification',customerController.Verification);

module.exports = router;
