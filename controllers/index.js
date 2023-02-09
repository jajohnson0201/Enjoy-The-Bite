const router = require('express').Router();
const homePage =require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homePage);

module.exports = router;