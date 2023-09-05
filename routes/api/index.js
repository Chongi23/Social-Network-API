//Requires for express and user.thoughts routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');


//.use for users and thoughts routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);


//Export router
module.exports = router;