var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.get('/create', controller.create)
router.post('/create', controller.creado)
router.post('/delete/:id', controller.delete)
router.get('/edit/:id', controller.edit)
 router.post('/edit/:id', controller.edited)

module.exports = router;
