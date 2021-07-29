const router = require('express').Router();
const {
    getAllProduct,
    postAllProduct,
} = require('../controllers/productsController');

router.get('/', getAllProduct);
router.post('/all', postAllProduct);

module.exports = router;
