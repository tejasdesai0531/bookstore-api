var express = require('express');
var router = express.Router();

const authRouter = require('./auth/auth.route')
const bookRouter = require('./books/books.route')
const authMiddleWare = require('../middlewares/auth.middleware')

router.use('/auth', authRouter)
router.use('/book', bookRouter)
// router.use('/profile', authMiddleWare.authCheck, profileRouter)

module.exports = router;