const router = require('express').Router();
const userRouter = require('./userRoutes');
const postRoutes = require('./postRoutes');


router.use('/users', userRouter);
router.use('/postObject', postRoutes);

module.exports = router;