const router = require('express').Router();
const apiRoutes = require('./api');



//.use for apiRoutes
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route.'));

//Export router
module.exports=router;