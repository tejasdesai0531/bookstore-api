var express = require('express');
var router = express.Router();

const authRouter = require('./auth/auth.route')
const bookRouter = require('./books/books.route')
const orderRouter = require('./orders/orders.route')
const authMiddleWare = require('../middlewares/auth.middleware')

router.use('/auth', authRouter)
router.use('/book', bookRouter)
router.use('/order', authMiddleWare.authCheck, orderRouter)

module.exports = router;